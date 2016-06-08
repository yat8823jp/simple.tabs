#simple-tabs

## Requires
jQuery

## usage

### HTML


	
	<ul class="tabs">
		<li><a href="#tab1">buttonA</a></li>
		<li><a href="#tab2">buttonB</a></li>
		<li><a href="#tab3">buttonC</a></li>
	</ul>

	<article class="tab-content is-hidden" id="tab1">
		<p>sample textA</p>
	</article>
	<article class="tab-content is-hidden" id="tab2">
		<p>sample textB</p>
	</article>
	<article class="tab-content is-hidden" id="tab3">
		<p>sample textC</p>
	</article>

__Required class__

* .tabs・・・タブボタンの親要素に
* .tab-content・・・タブコンテンツブロックの親要素に

### css

```
.is-hidden {
	display: none;
}
.is-active {
	display: block;
}
```