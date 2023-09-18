function divide(numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0) {
            throw new Error("Помилка: Неправильні аргументи для ділення");
        }

        const result = numerator / denominator;
        return result;
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Робота завершена");
    }
}
console.log("Результат ділення 20 на 2:", divide(20, 2));
console.log("Результат ділення 15 на 0:", divide(15, 0));
console.log("Результат ділення 'xyz' на 25:", divide('xyz', 25));