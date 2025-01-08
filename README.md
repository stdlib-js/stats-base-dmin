<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dmin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the minimum value of a double-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dmin from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dmin@deno/mod.js';
```

#### dmin( N, x, strideX )

Computes the minimum value of a double-precision floating-point strided array `x`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dmin( x.length, x, 1 );
// returns -2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the minimum value of every other element in `x`,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = dmin( 4, x, 2 );
// returns -2.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dmin( 4, x1, 2 );
// returns -2.0
```

#### dmin.ndarray( N, x, strideX, offsetX )

Computes the minimum value of a double-precision floating-point strided array using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dmin.ndarray( x.length, x, 1, 0 );
// returns -2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the minimum value for every other element in `x` starting from the second element

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dmin.ndarray( 4, x, 2, 1 );
// returns -2.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import dmin from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dmin@deno/mod.js';

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
console.log( x );

var v = dmin( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dmin.h"
```

#### stdlib_strided_dmin( N, \*X, strideX )

Computes the minimum value of a double-precision floating-point strided array.

```c
const double x[] = { 1.0, -2.0, 2.0 };

double v = stdlib_strided_dmin( 3, x, 2 );
// returns -2.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dmin( const CBLAS_INT N, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dmin_ndarray( N, \*X, strideX, offsetX )

Computes the minimum value of a double-precision floating-point strided array using alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 2.0 };

double v = stdlib_strided_dmin_ndarray( 3, x, 2, 0 );
// returns -2.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dmin_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dmin.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the minimum value:
    double v = stdlib_strided_dmin( N, x, strideX );

    // Print the result:
    printf( "min: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dmax`][@stdlib/stats/base/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/dnanmin`][@stdlib/stats/base/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/min`][@stdlib/stats/base/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/smin`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dmin.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dmin

[test-image]: https://github.com/stdlib-js/stats-base-dmin/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dmin/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dmin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dmin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dmin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dmin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dmin/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dmin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dmin/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dmin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dmin/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dmin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dmin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dmin/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmax]: https://github.com/stdlib-js/stats-base-dmax/tree/deno

[@stdlib/stats/base/dnanmin]: https://github.com/stdlib-js/stats-base-dnanmin/tree/deno

[@stdlib/stats/base/min]: https://github.com/stdlib-js/stats-base-min/tree/deno

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats-base-smin/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
