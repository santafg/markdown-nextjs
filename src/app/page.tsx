import Markdown from "react-markdown";
import Markdown2 from "markdown-to-jsx";

export default function Home() {
  const markdown =
    "Here is a list of popular actors in Hollywood:  *   **Leonardo DiCaprio**  *   **Tom Hanks**  *   **Meryl Streep**  *   **Brad Pitt**  *   **Angelina Jolie**  *   **Robert Downey Jr.**  *   **Scarlett Johansson**  *   **Chris Evans**  *   **Jennifer Lawrence**  *   **Denzel Washington**  *   **Will Smith**  *   **Emma Watson**  *   **Daniel Radcliffe**  *   **Chris Pratt**  *   **Margot Robbie**  *   **Ryan Reynolds**  *   **Dwayne Johnson**  *   **Gal Gadot**  *   **Tom Cruise**  *   **Sandra Bullock**  *   **George Clooney**  *   **Julia Roberts**  *   **Harrison Ford**  *   **Mark Ruffalo**  *   **Zoe Saldana**  *   **Samuel L. Jackson**  *   **Amy Adams**  *   **Viola Davis**  *   **Emma Stone**  *   **Ryan Gosling** *   **Jennifer Aniston**   This list is not exhaustive, but it includes some of the most popular and well-known actors in Hollywood.";

  const markdown2 =
    "Here are some logarithm math formulas:\n\n*   **Definition of a Logarithm:**\n    \n    *   log_b(a) = c  if and only if  b^c = a \n    \n    *   Where:\n        *   b is the base of the logarithm\n        *   a is the argument of the logarithm\n        *   c is the exponent\n*   **Properties of Logarithms:**\n    \n    *   log_b(1) = 0 \n    *   log_b(b) = 1\n    *   log_b(a^n) = n * log_b(a)\n    *   log_b(a * c) = log_b(a) + log_b(c)\n    *   log_b(a / c) = log_b(a) - log_b(c)\n    *   log_a(b) = 1 / log_b(a)\n*   **Change of Base Formula:**\n    \n    *   log_b(a) = log_c(a) / log_c(b)\n    \n    *   Where:\n        *   c is any other base you wish to use\n*   **Natural Logarithm:**\n    \n    *   ln(a) = log_e(a)\n    \n    *   Where:\n        *   e is Euler's number (approximately 2.71828)\n*   **Common Logarithm:**\n    \n    *   log(a) = log_10(a)\n    \n    *   Where:\n        *   10 is the base of the logarithm";

  const markdown3 =
    "This is a fascinating problem! Let's break it down and see if we can find a solution.\n\n**Understanding the Problem:**\n\n* **Composite Integers:**  A composite integer is a positive integer that has more than two divisors (including 1 and itself).\n* **Divisors:**  The divisors of a number are the integers that divide evenly into that number. For example, the divisors of 12 are 1, 2, 3, 4, 6, and 12.\n* **The Property:** The problem states that for a composite number *n*, if we arrange its divisors in ascending order, then any divisor in the sequence must divide the sum of the next two divisors. \n\n**Solution Approach:**\n\n1. **Analyzing Small Cases:** Let's start by examining some small composite numbers to see if we can identify any patterns:\n    * **n = 4:** Divisors: 1, 2, 4. The property holds (1 divides 2 + 4).\n    * **n = 6:** Divisors: 1, 2, 3, 6. The property holds (1 divides 2 + 3, 2 divides 3 + 6).\n    * **n = 8:** Divisors: 1, 2, 4, 8. The property holds (1 divides 2 + 4, 2 divides 4 + 8). \n\n2. **Identifying a Potential Pattern:** It seems that the property might hold for numbers that are powers of 2.\n\n3. **Proof for Powers of 2:** Let's prove that if *n* is a power of 2 (i.e., *n* = 2^k for some positive integer *k*), then the property holds:\n    * The divisors of 2^k are 1, 2, 2^2, ..., 2^k.\n    * For any *i* (1 ≤ *i* ≤ *k* - 2), consider the divisors *d<sub>i</sub>*, *d<sub>i+1</sub>*, and *d<sub>i+2</sub>*:\n        * *d<sub>i</sub>* = 2<sup>i</sup>\n        * *d<sub>i+1</sub>* = 2<sup>i+1</sup>\n        * *d<sub>i+2</sub>* = 2<sup>i+2</sup>\n    * Notice that *d<sub>i</sub>* divides *d<sub>i+1</sub>* + *d<sub>i+2</sub>* because 2<sup>i+1</sup> + 2<sup>i+2</sup> = 2<sup>i</sup>(2 + 4) = 2<sup>i</sup> * 6, and 6 is divisible by 2.\n\n4. **Testing Other Cases:** We need to consider if any other composite numbers satisfy the property. Let's look at some examples:\n    * **n = 9:** Divisors: 1, 3, 9. The property doesn't hold because 1 doesn't divide 3 + 9.\n    * **n = 10:** Divisors: 1, 2, 5, 10. The property doesn't hold because 1 doesn't divide 2 + 5. \n\n5. **Conjecture and Further Investigation:** It seems like the only composite numbers that satisfy the property are powers of 2. To be sure, we would need to prove this rigorously, potentially using induction or other number theory techniques.\n\n**Conclusion:**\n\nBased on our observations, it seems that the only composite integers *n* that satisfy the given property are those of the form *n* = 2<sup>k</sup> + 1, where *k* is a positive integer. \n\n**Important Note:**  This solution is based on observations and conjecture. A rigorous proof would be required to confirm this result. \n";

  const q3 =
    "Determine all composite integers $n-1$ that satisfy the following property: if $d_1,d_2,dots,d_k$ are all the positive divisors of $n$ with $1-d_1<d_2<dots<d_k=n$. then $d_i$ divides $d_(i+1)+d_{i+2)}$ for every $1le i le k-2$.";

  return (
    <div className="p-4 lg:p-12">
      <div className="mb-6">
        <h1>Questions -</h1>
        <ol>
          <li>1. generate a list of popular actors in hollywood</li>
          <li>2. generate a logarithm math formula</li>
          <li>3.{q3}</li>
        </ol>
      </div>
      <div className="mb-6">
        <h1>Responses -</h1>
        <ol className="flex flex-col gap-4">
          <li>1. {markdown}</li>
          <li>2. {markdown2}</li>
          <li>3.{markdown3}</li>
        </ol>
      </div>
      <div className="my-6 mt-12">Markdowns- </div>
      <div>
        <h1 className="text-xl">npm i react-markdown</h1>
        <br />
        <Markdown>{markdown}</Markdown>
        <br />
        <Markdown>{markdown2}</Markdown>
        <br />
        <Markdown>{markdown3}</Markdown>
      </div>
      <div className="mt-12">
        <h1 className="text-xl">npm i markdown-to-jsx</h1>
        <br />
        <Markdown2>{markdown}</Markdown2>
        <br />
        <Markdown2>{markdown2}</Markdown2>
        <br />
        <Markdown2>{markdown3}</Markdown2>
      </div>
    </div>
  );
}
