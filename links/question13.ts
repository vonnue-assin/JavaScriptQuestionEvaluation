//Write a JavaScript function to fill an array with values within supplied bounds

const fillArray = (
  start: number | String,
  end: number | string,
  step: number = 1
) => {
  const result: (number | string)[] = [];

  if (typeof start !== typeof end || step <= 0) {
    return result;
  }

  if (typeof start === "number" && typeof end == "number") {
    const isAscending = start <= end;
    for (
      let i = start;
      isAscending ? i <= (end as number) : i >= (end as number);
      isAscending ? (i += step) : (i -= step)
    ) {
      result.push(i);
    }
  } else if (
    typeof start === "string" &&
    typeof end === "string" &&
    start.length === 1 &&
    end.length === 1
  ) {
    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);
    const isAscending = startCode <= endCode;

    for (
      let i = startCode;
      isAscending ? i <= endCode : i >= endCode;
      isAscending ? (i += step) : (i -= step)
    ) {
      result.push(String.fromCharCode(i));
    }
  }
  return result;
};

console.log(fillArray(1, 6));
console.log(fillArray("a", "d"));
console.log(fillArray(0, 25, 5));
console.log(fillArray("Z", "A", 5));


// const unzip = (arr: any[][]) => 
//   arr.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc), 

//   Array.from({ length: Math.max(...arr.map(x => x.length)) }).map(() => []));

