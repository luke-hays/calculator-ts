import NumberLib from '../../library/NumberLib';

class EquationStack {
  private MAX_DIGIT_LENGTH = 8;

  private equation: string[];

  constructor(equation: string[] = []) {
    this.equation = equation;
  }

  get length(): number {
    return this.equation.length;
  }

  public push(item: string): void {
    if (NumberLib.isNumber(item)) {
      // If stack is empty, push onto stack
      if (this.length === 0) {
        this.equation.push(item);
      } else {
        // Check the top of the equation stack
        let token = this.pop() ?? '';

        // If token is number and won't surpass max length
        // concat to token and push back on stack
        if (NumberLib.isNumber(token)) {
          if (token.length >= this.MAX_DIGIT_LENGTH) return;
          token += item;
          this.equation.push(token);
        } else {
          // If its an operator
          // push operator back on stack
          this.equation.push(token);
          // push new number to stack
          this.equation.push(item);
        }
      }
    } else {
      // If equation stack is empty push 0
      if (this.equation.length === 0) this.equation.push('0');

      // Push the operator onto the stack
      this.equation.push(item);
    }
  }

  public pop(): string | undefined {
    return this.equation.pop();
  }

  public format(): string {
    return this.equation.join(' ');
  }

  public computeValue(): string | undefined {
    // This will NOT take order of operations into account (yet)
    // While stack has elements
    if (this.length === 0) return '0';

    // If theres only one just return
    if (this.length === 1) return this.equation[0];

    let x = NumberLib.convertToNumber(this.equation[0]);
    for (let i = 1; i < this.length; i += 2) {
      const operator = this.equation[i];
      const y = NumberLib.convertToNumber(this.equation[i + 1]);

      switch (operator) {
        case '+':
          x += y;
          break;
        case '-':
          x -= y;
          break;
        case '/':
          x /= y;
          break;
        default:
          // Display error here
          break;
      }
    }
    return x.toString();
  }

  public copyEquation(): string[] {
    return [...this.equation];
  }
}

export default EquationStack;
