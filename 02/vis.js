const x_var = 'name';

const alphabet = 'abcdef'.split('');
const names = [
  'Ann',
  'Bob',
  'Jean',
  'Chuck',
  'Denise',
  'Eric',
  'Frida',
  'Greg',
  'Hillary'
];

const setup = d3
  .marcon()
  .top(20)
  .bottom(20)
  .left(10)
  .right(10)
  .width(window.innerWidth)
  .height(window.innerHeight);

setup.render()

const width = setup.innerWidth();
const height = setup.innerHeight();
const svg = setup.svg();

const color = d3.scaleOrdinal([
  '#66c2a5',
  '#fc8d62',
  '#8da0cb',
  '#e78ac3',
  '#a6d854',
  '#ffd92f'
]);

const x = d3
  .scaleBand()
  .rangeRound([0, width])
  .domain(names)
  .padding(0.25);

const y = d3.scaleLinear().rangeRound([height, 0]);

const x_axis = d3.axisBottom(x);

const y_axis = d3
  .axisRight(y)
  .tickSize(width)
  .tickFormat((d, i, ticks) => i == ticks.length - 1 ? `${d} value` : d);

svg
  .append('g')
  .attr('class', 'x axis')
  .attr('transform', `translate(0,${height})`)
  .call(x_axis)

svg
  .append('g')
  .attr('class', 'y axis')
  .call(customYAxis)

const stack = d3
  .stack()
  .keys(alphabet)
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetNone);

redraw(randomData())

d3.interval(() => {
  redraw(randomData())
}, 1000)

function redraw(data) {
  // update the y scale
  y.domain([
    0,
    jz.arr.max(
      data.map(d => d.sum)
    )
  ])

  svg
    .select('.y')
    .transition()
    .call(customYAxis)

  // each data column (a.k.a "key" or "series") needs to be iterated over
  // the variable alphabet represents the unique keys of the stacks
  alphabet.forEach((key, key_index) => {
    const bar = svg
      .selectAll(`.bar-${key}`)
      .data(stack(data)[key_index], d => `${d.data[x_var]}-${key}`);

    bar
      .transition()
      .attr('x', d => x(d.data[x_var]))
      .attr('y', d => y(d[1]))
      .attr('height', d => y(d[0]) - y(d[1]))

    bar
      .enter()
      .append('rect')
      .attr('class', d => `bar bar-${key}`)
      .attr('x', d => x(d.data[x_var]))
      .attr('y', d => y(d[1]))
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
      .attr('fill', d => color(key))
  })
}

function randomData(data) {
  return names.map(d => {
    const obj = {};
    obj.name = d
    const nums = [];
    alphabet.forEach(e => {
      const num = jz.num.randBetween(1, 10);
      obj[e] = num
      nums.push(num)
    })
    obj.sum = jz.arr.sum(nums)
    return obj
  })
}

function customYAxis(g) {
  g.call(y_axis)
  g
    .selectAll('.tick:not(:first-of-type) line')
    .attr('stroke', '#777')
    .attr('stroke-dasharray', '2,2')
  g
    .selectAll('.tick text')
    .attr('x', 4)
    .attr('dy', -4)
}
