/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekday{
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}
function isWeekend(day: weekday): boolean {
  return (day === weekday.SAT || day === weekday.SUN)  

}
