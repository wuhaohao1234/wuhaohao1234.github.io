---
title: "Rust小书"
date: 2022-01-27T23:44:06+08:00
---

# rust小书

[rust官方文档](https://kaisery.github.io/trpl-zh-cn/title-page.html)讲的是比较详细的，这里给出一个总结(提取出核心点)

以下所有操作均在mac

## 快速开始

### install

```sh
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# 测试
$ rustc --version

$ cargo --version
```
### hello world

```sh
$ cargo new hello_world
$ cd helo_world
```
这里具体看这Cargo.toml

```toml
[package]
name = "hello_world"
version = "0.1.0"
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```
src/main.rs
```rust
fn main() {
    println!("Hello, world!");
}
```

构建并运行

```sh
$ cargo build
$ cargo run
```

## 猜猜看游戏

学 let、match、方法、关联函数、外部 crate 等知识

### 快速开始

```sh
$ cargo new guessing_game
$ cd guessing_game
```

src/main.rs

```rust
use std::io;

fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}

```

解释

1. [引入std::io 的读写库](https://kaisery.github.io/trpl-zh-cn/ch07-04-bringing-paths-into-scope-with-the-use-keyword.html)
2. 输出2行对话
3. [声明一个可变的字符串](https://kaisery.github.io/trpl-zh-cn/ch03-01-variables-and-mutability.html)
4. 处理用户输入内容，并将内容赋值给guess，并加入expect进行[报错处理](https://kaisery.github.io/trpl-zh-cn/ch09-00-error-handling.html)，这里的mut指的是可变的，&是指[引用](https://kaisery.github.io/trpl-zh-cn/ch04-02-references-and-borrowing.html)(可以暂时理解为指针)
5. 输出guess

### 添加一个随机数的包rand

Cargo.toml

```toml
[package]
name = "guessing_game"
version = "0.1.0"
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
rand = "0.8.3"
```

生成随机数

```rs
use std::io;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..101);

    println!("The secret number is: {}", secret_number);

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}

```

这里主要是通过`let secret_number = rand::thread_rng().gen_range(1..101);`
来实现生存一个1到100的随机数

### 判断大小

```rust
use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..101);

    println!("The secret number is: {}", secret_number);

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = guess.trim().parse().expect("Please type a number!");

    println!("You guessed: {}", guess);
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}

```
使用`use std::cmp::Ordering;`这个包来实现判断大小

Ordering 也是一个[枚举](https://kaisery.github.io/trpl-zh-cn/ch06-00-enums.html)，不过它的成员是 Less、Greater 和 Equal。这是比较两个值时可能出现的三种结果

并且使用了[match](https://kaisery.github.io/trpl-zh-cn/ch06-02-match.html)

并且创建了一个[隐藏变量](https://kaisery.github.io/trpl-zh-cn/ch03-01-variables-and-mutability.html#%E9%9A%90%E8%97%8Fshadowing)来讲guess由字符串类型转为数字类型

### 开始循环

```rust
use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("you secret_number is {}", secret_number);
    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
```

将 expect 调用换成 match 语句，以从遇到错误就崩溃转换为处理错误。须知 parse 返回一个 Result 类型，而 Result 是一个拥有 Ok 或 Err 成员的枚举。这里使用的 match 表达式，和之前处理 cmp 方法返回 Ordering 时用的一样

然后使用[loop](https://kaisery.github.io/trpl-zh-cn/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8%E5%BE%AA%E7%8E%AF%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C) 与 break 来实现循环

## 基本概念

### 变量

[原文](https://kaisery.github.io/trpl-zh-cn/ch03-01-variables-and-mutability.html)

这里主要注重3点

1. 变量默认不可改变
2. 通过加入mut 使得改变量可改变
3. 通过重新使用let 来实现隐藏变量

mut 与隐藏的另一个区别是，当再次使用 let 时，实际上创建了一个新变量，我们可以改变值的类型，并且复用这个名字。

### 数据类型

1. 标量类型
   1. 整形 没有小数部分的数字
   2. 浮点型 带小数点的数字
   3. 布尔类型 布尔类型有两个可能的值：true 和 false
   4. 字符类型 语言中最原生的字母类型
2. 复合类型
   1. 元组类型 元组是一个将多个其他类型的值组合进一个复合类型的主要方式。元组长度固定：一旦声明，其长度不会增大或缩小。
    ```rust
    fn main() {
      let tup = (500, 6.4, 1);

      let (x, y, z) = tup;

      println!("The value of y is: {}", y);
    }

    ```
   2. 数组类型 另一个包含多个值的方式是 数组（array）。与元组不同，数组中的每个元素的类型必须相同。Rust 中的数组与一些其他语言中的数组不同，Rust中的数组长度是固定的。

   ```rust
    fn main() {
      let a = [1, 2, 3, 4, 5];

      let first = a[0];
      let second = a[1];
    }
   ```
### 函数

函数最需要关注2点：
1. 参数
2. 返回值

```rust
fn main() {
    let x = plus_one(5);

    println!("The value of x is: {}", x);
}

fn plus_one(x: i32) -> i32 {
    x + 1
}

```

这里注意最后一句后面没分号，则是返回值，return 被省略

### 控制流

这里主要有3点

1. if 语句
2. loop 循环
3. for 循环

```rust
fn main() {
    let number = 3;

    if number < 5 {
        println!("condition was true")
    }
    println!("condition was false");
}

```

这里不建议使用else

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {}", count);
}

```

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a.iter() {
        println!("the value is: {}", element);
    }
}

```

## 所有权

[原文](https://kaisery.github.io/trpl-zh-cn/ch04-01-what-is-ownership.html)

### 堆和栈基础

这里对于数据结构有一定的要求，需要搞懂堆，栈。但是原文在开头很详细点讲解了二者概念

栈: 以放入值的顺序存储值并以相反顺序取出值。这也被称作 后进先出（last in, first out）。

栈中的所有数据都必须占用已知且固定的大小。在编译时大小未知或大小可能变化的数据，要改为存储在堆上

当向堆放入数据时，你要请求一定大小的空间。内存分配器（memory allocator）在堆的某处找到一块足够大的空位，把它标记为已使用，并返回一个表示该位置地址的 指针（pointer）。这个过程称作 在堆上分配内存（allocating on the heap），有时简称为 “分配”（allocating）。

### 所有权规则

1. Rust 中的每一个值都有一个被称为其 所有者（owner）的变量。
2. 值在任一时刻有且只有一个所有者。
3. 当所有者（变量）离开作用域，这个值将被丢弃。

最核心点： Rust 采取了一个不同的策略：内存在拥有它的变量离开作用域后就被自动释放。

案例1:

```rust
let s1 = String::from("hello");
let s2 = s1;

println!("{}, world!", s1);
```

这里会直接报错，当 s2 和 s1 离开作用域，他们都会尝试释放相同的内存。这是一个叫做 二次释放（double free）的错误，也是之前提到过的内存安全性 bug 之一。两次释放（相同）内存会导致内存污染，它可能会导致潜在的安全漏洞。

为了确保内存安全，这种场景下 Rust 的处理有另一个细节值得注意。在 let s2 = s1 之后，Rust 认为 s1 不再有效, 因此 Rust 不需要在 s1 离开作用域后清理任何东西

解决办法：通过clone再重新开辟一块内存

案例2:

```rust
fn main() {
    let s = String::from("hello");  // s 进入作用域

    takes_ownership(s);             // s 的值移动到函数里 ...
                                    // ... 所以到这里不再有效

    let x = 5;                      // x 进入作用域

    makes_copy(x);                  // x 应该移动函数里，
                                    // 但 i32 是 Copy 的，所以在后面可继续使用 x

} // 这里, x 先移出了作用域，然后是 s。但因为 s 的值已被移走，
  // 所以不会有特殊操作

fn takes_ownership(some_string: String) { // some_string 进入作用域
    println!("{}", some_string);
} // 这里，some_string 移出作用域并调用 `drop` 方法。占用的内存被释放

fn makes_copy(some_integer: i32) { // some_integer 进入作用域
    println!("{}", some_integer);
} // 这里，some_integer 移出作用域。不会有特殊操作

```

当尝试在调用 takes_ownership 后使用 s 时，Rust 会抛出一个编译时错误。

案例3:

```rust
fn main() {
    let s1 = gives_ownership();         // gives_ownership 将返回值
                                        // 移给 s1

    let s2 = String::from("hello");     // s2 进入作用域

    let s3 = takes_and_gives_back(s2);  // s2 被移动到
                                        // takes_and_gives_back 中,
                                        // 它也将返回值移给 s3
} // 这里, s3 移出作用域并被丢弃。s2 也移出作用域，但已被移走，
  // 所以什么也不会发生。s1 移出作用域并被丢弃

fn gives_ownership() -> String {             // gives_ownership 将返回值移动给
                                             // 调用它的函数

    let some_string = String::from("hello"); // some_string 进入作用域.

    some_string                              // 返回 some_string 并移出给调用的函数
}

// takes_and_gives_back 将传入字符串并返回该值
fn takes_and_gives_back(a_string: String) -> String { // a_string 进入作用域

    a_string  // 返回 a_string 并移出给调用的函数
}

```

案例5:
```rust
fn main() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    // 这里再使用s1 会失效

    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() 返回字符串的长度

    (s, length)
}

```

### 引用

解决上述s1无法使用问题

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

```

这些 & 符号就是引用(引用内存)，它们允许你使用值但不获取其所有权

可变引用

```rust
fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}

```

### slice

字符串 slice（string slice）是 String 中一部分值的引用，它看起来像这样：

```rust

fn main() {
  let s = String::from("hello world");

  let hello = &s[0..5];
  let world = &s[6..11];
}

```

## 结构体

原始程序计算面积

```rust
fn main() {
    let width1 = 30;
    let height1 = 50;

    println!(
        "The area of the rectangle is {} square pixels.",
        area(width1, height1)
    );
}

fn area(width: u32, height: u32) -> u32 {
    width * height
}

```

使用结构体重构

```rust

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };
    println!("rect1 is {:#?}", rect1);
    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect1)
    );
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}

```

这里我们定义了一个结构体并称其为 Rectangle。在大括号中定义了字段 width 和 height，类型都是 u32。接着在 main 中，我们创建了一个具体的 Rectangle 实例，它的宽是 30，高是 50。

函数 area 现在被定义为接收一个名叫 rectangle 的参数，其类型是一个结构体 Rectangle 实例的不可变借用(创建一个引用的行为)。

增加属性来派生 Debug trait，并使用调试格式打印 Rectangle 实例

定义方法:impl

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}

```

## 枚举与匹配
枚举
```rust
// 该属性用于隐藏对未使用代码的警告。
#![allow(dead_code)]

// 拥有隐式辨别值（implicit discriminator，从 0 开始）的 enum
enum Number {
    Zero,
    One,
    Two,
}

// 拥有显式辨别值（explicit discriminator）的 enum
enum Color {
    Red = 0xff0000,
    Green = 0x00ff00,
    Blue = 0x0000ff,
}

fn main() {
    // `enum` 可以转成整型。
    println!("zero is {}", Number::Zero as i32);
    println!("one is {}", Number::One as i32);

    println!("roses are #{:06x}", Color::Red as i32);
    println!("violets are #{:06x}", Color::Blue as i32);
}

```

match

```rust
fn main() {
    let number = 13;
    // 试一试 ^ 将不同的值赋给 `number`

    println!("Tell me about {}", number);
    match number {
        // 匹配单个值
        1 => println!("One!"),
        // 匹配多个值
        2 | 3 | 5 | 7 | 11 => println!("This is a prime"),
        // 匹配一个闭区间范围
        13..=19 => println!("A teen"),
        // 处理其他情况
        _ => println!("Ain't special"),
    }

    let boolean = true;
    // match 也是一个表达式
    let binary = match boolean {
        // match 分支必须覆盖所有可能的值
        false => 0,
        true => 1,
        // 试一试 ^ 将其中一条分支注释掉
    };

    println!("{} -> {}", boolean, binary);
}
```

```rust
// 需要 `allow` 来消除警告，因为只使用了枚举类型的一种取值。
#[allow(dead_code)]
enum Color {
    // 这三个取值仅由它们的名字（而非类型）来指定。
    Red,
    Blue,
    Green,
    // 这些则把 `u32` 元组赋予不同的名字，以色彩模型命名。
    RGB(u32, u32, u32),
    HSV(u32, u32, u32),
    HSL(u32, u32, u32),
    CMY(u32, u32, u32),
    CMYK(u32, u32, u32, u32),
}

fn main() {
    let color = Color::RGB(122, 17, 40);
    // 试一试 ^ 将不同的值赋给 `color`

    println!("What color is it?");
    // 可以使用 `match` 来解构 `enum`。
    match color {
        Color::Red   => println!("The color is Red!"),
        Color::Blue  => println!("The color is Blue!"),
        Color::Green => println!("The color is Green!"),
        Color::RGB(r, g, b) =>
            println!("Red: {}, green: {}, and blue: {}!", r, g, b),
        Color::HSV(h, s, v) =>
            println!("Hue: {}, saturation: {}, value: {}!", h, s, v),
        Color::HSL(h, s, l) =>
            println!("Hue: {}, saturation: {}, lightness: {}!", h, s, l),
        Color::CMY(c, m, y) =>
            println!("Cyan: {}, magenta: {}, yellow: {}!", c, m, y),
        Color::CMYK(c, m, y, k) =>
            println!("Cyan: {}, magenta: {}, yellow: {}, key (black): {}!",
                c, m, y, k),
        // 不需要其它分支，因为所有的情形都已覆盖
    }
}

```

待续......