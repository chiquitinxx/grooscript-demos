package react

import org.codehaus.groovy.ast.ASTNode
import org.codehaus.groovy.ast.AnnotationNode
import org.codehaus.groovy.ast.ClassHelper
import org.codehaus.groovy.ast.ClassNode
import org.codehaus.groovy.ast.MethodNode
import org.codehaus.groovy.ast.Parameter
import org.codehaus.groovy.ast.VariableScope
import org.codehaus.groovy.ast.builder.AstBuilder
import org.codehaus.groovy.ast.expr.ArgumentListExpression
import org.codehaus.groovy.ast.expr.ClassExpression
import org.codehaus.groovy.ast.expr.ClosureExpression
import org.codehaus.groovy.ast.expr.ConstructorCallExpression
import org.codehaus.groovy.ast.expr.MethodCallExpression
import org.codehaus.groovy.ast.expr.PropertyExpression
import org.codehaus.groovy.ast.expr.VariableExpression
import org.codehaus.groovy.ast.stmt.BlockStatement
import org.codehaus.groovy.ast.stmt.ExpressionStatement
import org.codehaus.groovy.control.CompilePhase
import org.codehaus.groovy.control.SourceUnit
import org.codehaus.groovy.transform.ASTTransformation
import org.codehaus.groovy.transform.GroovyASTTransformation
import org.grooscript.builder.HtmlBuilder
import org.grooscript.jquery.GQueryImpl

import java.lang.reflect.Modifier

@GroovyASTTransformation(phase=CompilePhase.SEMANTIC_ANALYSIS)
public class ComponentImpl implements ASTTransformation {

    public void visit(ASTNode[] nodes, SourceUnit sourceUnit) {
        //Start
        if (!nodes[0] instanceof AnnotationNode || !nodes[1] instanceof ClassNode) {
            return
        }

        ClassNode classNode = (ClassNode) nodes[1]
        ClassNode jQueryImpl = new ClassNode(GQueryImpl)

        addDrawMethod(classNode)

        addStartMethod(classNode)

        classNode.properties.each { propertyNode ->
            if (propertyNode.type.name == 'java.lang.String') {
                addSetMethod(classNode, propertyNode.name)
            }
        }

        classNode.addProperty('gQuery', Modifier.PUBLIC , jQueryImpl,
                new ConstructorCallExpression(jQueryImpl, ArgumentListExpression.EMPTY_ARGUMENTS), null, null)
        classNode.addProperty('selector', Modifier.PUBLIC , ClassHelper.STRING_TYPE, null, null, null)

        manageRenderMethod(classNode)
    }

    private addSetMethod(ClassNode classNode, String nameProperty) {
        def params = new Parameter[1]
        params[0] = new Parameter(ClassHelper.STRING_TYPE, nameProperty)
        classNode.addMethod("set${nameProperty.capitalize()}".toString(), Modifier.PUBLIC, null, params,
                ClassNode.EMPTY_ARRAY, new AstBuilder().buildFromString("""
            this.${nameProperty} = ${nameProperty}
            this.draw()
            gQuery.focusEnd('#${nameProperty}')
        """)[0])
    }

    private addDrawMethod(ClassNode classNode) {
        classNode.addMethod('draw', Modifier.PUBLIC, null, Parameter.EMPTY_ARRAY,
                ClassNode.EMPTY_ARRAY, new AstBuilder().buildFromString('''
            this.render()
            gQuery.attachMethodsToDomEvents(this)
        ''')[0])
    }

    private addStartMethod(ClassNode classNode) {
        def params = new Parameter[1]
        params[0] = new Parameter(ClassHelper.STRING_TYPE, 'selector')
        classNode.addMethod('start', Modifier.PUBLIC, null, params,
                ClassNode.EMPTY_ARRAY, new AstBuilder().buildFromString('''
            this.selector = selector
            this.init()
            this.draw()
        ''')[0])
    }

    private manageRenderMethod(ClassNode classNode) {
        MethodNode renderMethod = classNode.methods.find { it.name == 'render'}
        if (!renderMethod) {
            classNode.addMethod('render', Modifier.PUBLIC, null, Parameter.EMPTY_ARRAY,
                    ClassNode.EMPTY_ARRAY, new AstBuilder().buildFromString('''
                //Nothing to do
            ''')[0])
        } else {
            BlockStatement actualCode = (BlockStatement)renderMethod.code

            VariableScope variableScope = actualCode.getVariableScope()
            VariableScope blockScope = variableScope.copy()

            ClosureExpression closure = new ClosureExpression(Parameter.EMPTY_ARRAY, actualCode)
            VariableScope closureScope = variableScope.copy()
            closure.setVariableScope(closureScope)

            renderMethod.setCode(new BlockStatement([
                new ExpressionStatement(
                    new MethodCallExpression(
                        new MethodCallExpression(
                            new PropertyExpression(
                                new VariableExpression('this', ClassHelper.OBJECT_TYPE),
                                'gQuery'
                            ),
                            'call',
                            new ArgumentListExpression([
                                    new VariableExpression('selector', ClassHelper.STRING_TYPE)
                            ])
                        ),
                        'html',
                        new ArgumentListExpression([
                            new MethodCallExpression(
                                new ClassExpression(new ClassNode(HtmlBuilder)),
                                'build' ,
                                new ArgumentListExpression([
                                    closure
                                ])
                            )
                        ])
                    )
                )
            ], blockScope))
        }
    }
}