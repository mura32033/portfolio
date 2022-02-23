---
title: markdown
---

# いろいろ <Badge text="beta" type="warning"/> <Badge text="default theme"/>

[GAS](gas)

[[toc]]

## foo

- Type: `string`
- Default: `/`

## bar

- Type: `string`
- Default: `/`

## Markdown formats

### Tip

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### Table

thだよ | thだよ
--- | ---
tdだよ | tdだよ
td | td

#### Table with line format

デフォルト | 左寄せにする | 中央寄せにする | 右寄せにする
---|:--- |:---:| ---:
デフォルト | 左寄せ | 中央 | 右寄せ

### Code block

``` js
export default {
    data () {
        return {
            msg: 'コードだよ'
        }
    }
}
```

### Link out

[リンクサンプル：GitHub](https://github.com/)

### Quotation

> 引用の
>> 入れ子

### List

1. A
2. B

### Emphasize and Italize

***強調+イタリック***

### Emoji
:tada: