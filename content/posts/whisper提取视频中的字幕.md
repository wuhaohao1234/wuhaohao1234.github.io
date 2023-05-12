---
title: "Whisper提取视频中的字幕"
date: 2023-05-13T02:26:18+08:00
---

## Whisper提取视频中的字幕

参考

[教程](https://github.com/flameddd/blog/blob/master/2023-03-01%EF%BC%9Awhisper.cpp%20%E8%AA%9E%E9%9F%B3%E8%BD%89%E6%96%87%E5%AD%97%E6%95%99%E5%AD%B8.md)

[whisper.cpp](https://github.com/wuhaohao1234/whisper.cpp)

### clone whisper.cpp

```shell
clone repo https://github.com/ggerganov/whisper.cpp
```

下载large到models目录


```shell
bash ./models/download-ggml-model.sh large
```

或者到这个网站

https://huggingface.co/ggerganov/whisper.cpp/tree/main

### 允许make命令生成./main

```sh
make
```

### 视频转16HZ的wav文件

> 这里需要下载ffmpeg

```shell
ffmpeg -i input.mp4 -vn -acodec pcm_s16le -ar 44100 -ac 2 output.wav

```

```shell
ffmpeg -i input.wav -ar 16000 output.wav
```

### 输出文字

```shell
./main -m models/ggml-large.bin -l zh -f ~/Downloads/white.wav  -osrt -otxt -ovtt
```

### 后续扩展

爬虫抖音短视频

https://github.com/wuhaohao1234/douyin-request

获取文案

### 结合chat-gpt生成不同文案

https://chat.openai.com/

免费的可以使用

https://open-assistant.io/zh/dashboard