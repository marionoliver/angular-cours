const machines = [
  {
    type: 'machine',
    value: 457
  },
  {
    type: 'machine2',
    value: 78
  },
  {
    type: 'machine',
    value: 463
  },
  {
    type: 'machine',
    value: 856
  },
  {
    type: 'machine',
    value: 3
  },
  {
    type: 'machine',
    value: 65
  }
];

const calcul = type => {
  var result = 0;
  for (let machine of machines) {
    console.log(machine);
    result += machine.type === type ? machine.value : 0;
  }
  return result;
};
console.log(calcul('machine'))


machines2 = new Map();
const machine1 = {
  type: 'machine',
  value: 457
};
machines2.set(machine1.type, machine1);
const machine2 = {
  type: 'machine2',
  value: 78
};
machines2.set(machine2.type, machine2);
const machine3 = {
  type: 'machine',
  value: 463
};
machines2.set(machine3.type, machine3);
const machine4 = {
  type: 'machine',
  value: 856
};
machines2.set(machine4.type, machine4);
const machine5 = {
  type: 'machine',
  value: 3
};
machines2.set(machine5.type, machine5);
const machine6 = {
  type: 'machine',
  value: 65
};
machines2.set(machine6.type, machine6);

const calcul2 = function(type) {
  var result = 0;
  for (let machine of machines2) {
    console.log(machine);
    result += machine.type === type ? machine.value : 0;
  }
  return result;
}
console.log(calcul2('machine2'))
