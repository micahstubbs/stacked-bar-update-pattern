[Stacked Bar Update Pattern](https://bl.ocks.org/HarryStevens/7e3ec1a6722a153a5d102b6c42f4501d) from [@Harry_Stevens](https://twitter.com/harry_stevens)

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