function get_next_available_day(day, day_visited){       
  // if days are missing this function will be used 
  // to find the next day which available day 
  while (day < 7){
    if (day_visited.has(day)){
      return day
    }
    day++
  }
  return 0
}

function solution(D){
  
  days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
  }

  day_values = {}
  // keep track of the visited days 
  day_visited = new Set()
   
  for (var date in D){
    day = new Date(date).getDay()
    if (day_values[day]){
      day_values[day] += D[date]
    } else {
      day_values[day] = D[date]
    }
    day_visited.add(day)
  }
    
   // if the input doesnot have all seven days then day visited day_visited.size will be less than seven
  // in that case calculate the mean of previous day and next available day 
  if (day_visited.size < 7){
    for (var day = 0; day <= 6; day++){
      if (!day_visited.has(day)){
        prev = day - 1
        if (prev < 0){
          prev = 6
        }

        next = get_next_available_day(day, day_visited)
        day_values[day] = ~~((day_values[prev]+day_values[next])/2)
      }
    }
  }

  result = {}
  for (var day in day_values){
    result[days[day]] = day_values[day]
  }
  return result
}

D = [2,-6,2,2,2,6,8]

var D1 = {
  '2020-01-01': 4,
  '2020-01-02': 2,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2
}

var D2 = {
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4,
}

console.log(solution(D2))
