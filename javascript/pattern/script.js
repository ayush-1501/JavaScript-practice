console.log('netsted-loop-star-pattern');

function showPattern(totalRowsPatternCount) {
  for (let curRow=1;curRow<=totalRowsPatternCount;curRow++) {
    let patternDesign='';
    for (let i=0;i<curRow;i++) {
      patternDesign += '*'
    }
    console.log(patternDesign);
  }
}

showPattern(5);