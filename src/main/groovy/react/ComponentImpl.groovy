package react

import org.codehaus.groovy.ast.ASTNode
import org.codehaus.groovy.ast.AnnotationNode
import org.codehaus.groovy.ast.ClassHelper
import org.codehaus.groovy.ast.ClassNode
import org.codehaus.groovy.ast.expr.ArgumentListExpression
import org.codehaus.groovy.ast.expr.ConstructorCallExpression
import org.codehaus.groovy.control.CompilePhase
import org.codehaus.groovy.control.SourceUnit
import org.codehaus.groovy.transform.ASTTransformation
import org.codehaus.groovy.transform.GroovyASTTransformation
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
        classNode.addProperty('gQuery', Modifier.PUBLIC , jQueryImpl,
                new ConstructorCallExpression(jQueryImpl, ArgumentListExpression.EMPTY_ARGUMENTS), null, null)
        classNode.addProperty('selector', Modifier.PUBLIC , ClassHelper.STRING_TYPE, null, null, null)


        //println 'Ast ended!: ' + classNode

    }
}