export const findPercent = (oneHundred: number, dividend: number) => {
	let onePercent = oneHundred / 100
	let dividendPercent = dividend / onePercent
	return Math.floor(dividendPercent)
}
