import javascript

/**
 * @kind problem
 * @id comma
 * @problem.severity very-high
 * @severity-severity 10
 * @precision very-high
 */

class CommaToken extends PunctuatorToken {
    CommaToken() {
        getValue() = ","
    }
}

from CommaToken comma
where comma.getNextToken() instanceof CommaToken
select comma, "Omitted array elements are bad style.", comma.getFile(), comma.getLocation()