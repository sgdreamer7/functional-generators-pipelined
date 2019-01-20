function sequenceInfinite() {
  let count = 0;
  return function() {
    const result = count;
    count += 1;
    return result;
  }
}

function sequence(list) {
  let index = 0;
  return function() {
    if (index < list.length) {
      const result = list[index];
      index += 1;
      return result;
    }
  };
}

function filter(predicate) {
  return function(sequence) {
    return function filteredSequence() {
      const value = sequence();
      if (value !== undefined) {
        if (predicate(value)) {
          return value;
        } else {
          return filteredSequence();
        }
      }
    };
  };
}

function map(mapping) {
  return function(sequence) {
    return function() {
      const value = sequence();
      if (value !== undefined) {
        return mapping(value);
      }
    };
  };
}

function toList(sequence) {
  const arr = [];
  let value = sequence();
  while (value !== undefined) {
    arr.push(value);
    value = sequence();
  }
  return arr;
}

function reduce(accumulator, startValue) {
  return function(sequence) {
    let result = startValue;
    let value = sequence();
    while (value !== undefined) {
      result = accumulator(result, value);
      value = sequence();
    }
    return result;
  };
}

function take(n) {
  return function(sequence) {
    let count = 0;
    return function() {
      if (count < n) {
        count += 1;
        return sequence();
      }
    };
  };
}


module.exports={
  sequenceInfinite,
  sequence,
  filter,
  map,
  toList,
  reduce,
  take
}