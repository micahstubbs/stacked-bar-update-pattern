an iteration that adds custom mark styles

---

this iteration makes the code re-usable, removing references to any specific dataset

---

this iteration adds a title and a dropdown menu to switch between datasets

---

an iteration with static data from a json file. for convenience, this iteration stores three stacked datasets in an array and then iterates through these datasets on click.

```javascript
;[dataset0, dataset1, dataset2]
```

where each dataset itself is an array of objects that look like this:

```javascript
[
    {
        "name": "Ann",
        "a": 2,
        "b": 10,
        "c": 8,
        "d": 10,
        "e": 5,
        "f": 9,
        "sum": 44
    },
    {
        "name": "Bob",
        "a": 5,
        "b": 1,
        "c": 2,
        "d": 6,
        "e": 2,
        "f": 9,
        "sum": 25
    },
    ...
]
```

---

[Prettier](https://prettier.io/) formatted and [modern Javascript](https://babeljs.io/learn-es2015/) via the magic of code transformer [lebab](https://github.com/lebab/lebab)

in this example we also fix the size of the plot to 960px x 500px

an iteration on [Stacked Bar Update Pattern](https://bl.ocks.org/HarryStevens/7e3ec1a6722a153a5d102b6c42f4501d) from [@Harry_Stevens](https://twitter.com/harry_stevens)

---

Use D3's [general update pattern](https://bl.ocks.org/mbostock/3808218) to animate stacked bar chart transitions.

Data shown here is in this format:

<table>
<thead>
<tr>
<th>name</th>
<th>a</th>
<th>b</th>
<th>c</th>
<th>d</th>
<th>e</th>
<th>f</th>
<th>sum</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ann</td>
<td>8</td>
<td>6</td>
<td>3</td>
<td>6</td>
<td>1</td>
<td>1</td>
<td>25</td>
</tr>
<tr>
<td>Bob</td>
<td>1</td>
<td>9</td>
<td>10</td>
<td>1</td>
<td>5</td>
<td>8</td>
<td>34</td>
</tr>
<tr>
<td>Jean</td>
<td>3</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>8</td>
<td>21</td>
</tr>
<tr>
<td>Chuck</td>
<td>2</td>
<td>3</td>
<td>5</td>
<td>8</td>
<td>5</td>
<td>9</td>
<td>32</td>
</tr>
<tr>
<td>Denise</td>
<td>9</td>
<td>10</td>
<td>3</td>
<td>8</td>
<td>8</td>
<td>8</td>
<td>46</td>
</tr>
<tr>
<td>Eric</td>
<td>3</td>
<td>9</td>
<td>2</td>
<td>4</td>
<td>10</td>
<td>4</td>
<td>32</td>
</tr>
<tr>
<td>Frida</td>
<td>6</td>
<td>6</td>
<td>3</td>
<td>7</td>
<td>10</td>
<td>6</td>
<td>38</td>
</tr>
</tbody>
</table>

Axis styling from [this block](https://bl.ocks.org/mbostock/3371592). Colors from [ColorBrewer](http://colorbrewer2.org/#type=qualitative&scheme=Set2&n=6).
