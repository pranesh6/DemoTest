import javascript


/**
 * @name Exposure of private information
 * @description If private information is written to an external location, it may be accessible by
 *              unauthorized persons.
 * @kind problem
 * @problem.severity error
 * @security-severity 6.5
 * @precision high
 * @id cs/exposure-of-sensitive-information
 * @tags security
 *       external/cwe/cwe-359
 */


class CommaToken extends PunctuatorToken {
    CommaToken() {
        getValue() = ","
    }
}

from CommaToken comma
where comma.getNextToken() instanceof CommaToken
select comma,  "Omitted array elements are bad style." + comma.getLocation(), comma.getFile(), "Omitted array elements are bad style."