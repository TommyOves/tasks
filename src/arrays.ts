/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    const nums = [...numbers];
    const first_last = [nums[0], nums[nums.length - 1]];
    return first_last;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = [...numbers];
    const only_nums = ints.map((num: string): string =>
        isNaN(parseInt(num)) ? "0" : num
    );
    return only_nums.map((num: string): number => parseInt(num));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const ints = [...amounts];
    const only_nums = ints.map((num: string): string =>
        num[0] === "$" ? num.substring(1) : num
    );
    const string_to_int = only_nums.map((num: string): string =>
        isNaN(parseInt(num)) ? "0" : num
    );
    return string_to_int.map((num: string): number => parseInt(num));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const strings = [...messages];
    const no_questions = strings.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const cap_messages = no_questions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return cap_messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const strings = [...words];
    const less_than_four = strings.filter(
        (word: string): boolean => word.length < 4
    );
    return less_than_four.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const strings = [...colors];
    return (
        strings.length === 0 ||
        colors.filter((color: string): boolean =>
            ["red", "green", "blue"].includes(color)
        ).length === colors.length
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const the_sums = addends.join("+");
    return sum + "=" + the_sums;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const vals = [...values];
    const find_neg = vals.map((val: number): number => (val < 0 ? 0 : val));
    const dex_first_neg: number = find_neg.indexOf(0);
    const dex: number = dex_first_neg + 1;
    if (dex_first_neg === -1) {
        const sum: number = vals.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...vals, sum];
    } else {
        const before_neg = vals.slice(0, dex_first_neg);
        const sum: number = before_neg.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        vals.splice(dex, 0, sum);
        return vals;
    }
}
