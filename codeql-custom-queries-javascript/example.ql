import javascript


/**
 * @name Omitted Array Elements
 * @description Unwanted array elements should be removed.
 * @kind problem
 * @problem.severity error
 * @security-severity 10
 * @precision very-high
 * @id cs/exposure-of-sensitive-information
 */


class CommaToken extends PunctuatorToken {
    CommaToken() {
        getValue() = ","
    }
}

from CommaToken comma
where comma.getNextToken() instanceof CommaToken
select comma,  "Omitted array elements are bad style." + comma.getLocation(), comma.getFile(), "Omitted array elements are bad style."