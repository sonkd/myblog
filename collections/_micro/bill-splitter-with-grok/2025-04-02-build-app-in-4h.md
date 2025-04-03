---
title: Dùng AI làm ứng dụng Chia tiền đơn giản trong 4 tiếng
layout: post
date: 2025-04-02 08:55:56
author: sonohyeah
image: 
headerImage: false
description: ""
tags:
- Problem Development
- Payment
- AI

star: false
blog: true
hidden: false

---

Tò mò vọc vạch với tính năng *Code* của [Grok](https://grok.com/), tôi đã thử nghiệm ngay với ý tưởng xây dựng một ứng dụng **Chia tiền** cho nhóm bạn. Bắt đầu với đoạn prompt:

```bash
Help me code a web app for splitting bills of a group of friends; my basic idea includes some requirements: 
- payer can create multiple request bills with title name, total amount, the payees with a note about their item or something 
- export to save on Notes app (iOS or Android) 
- share directly to the group via tele/messenger 

Can I improve this idea also which step I can build this app, help me code that.
```
\
Ở chế độ *Think*, Grok đã "tư duy" phân tích yêu cầu tỉ mỉ tương tự tính năng DeepThink của DeepSeek hay Reason của ChatGPT. Thật điên rồ, vượt hơn sự mong đợi, có thể nói kết quả tương đương như một bản proposal của một team phát triển sản phẩm (thông thường để ra outline như vậy sẽ mất khoản 1 tuần làm việc).

[See details (Thoughts by Grok3)](/micro/bill-splitter-thoughts-grok3.md)

Cấu trúc "sinh" của AI như sau:

1. **Human-to-Machine**: Hiểu yêu cầu từ prompt (Understanding Your Requirements)
2. **Research**: Thực hiện yêu cầu (Improving Your Idea)
3. **Generate**: Trình bày kết quả-hướng dẫn các bước built app trong tình huống trên (Steps to Build the App)
4. **Reflect**: Giải thích cơ chế tại sao kết quả được tạo ra ở bước 3 (How It Meets Your Requirements)
5. **Ask-to-Learn**: Hỏi lại prompter để vừa "mồi" và vừa tiếp tục hướng dẫn cho "deep work" hiệu quả-thay vì chờ đợi prompter tự hỏi trùng lại hoặc lan man gây lãng phí tài nguyên và thời gian (Next Steps)

Nhận thấy cần đơn giản hơn một chút, tôi điều chỉnh.

```bash
Hold on, Can I code only with Javascript, make it with a simple alternative version
```
\
Cơ chế phản hồi của Grok cũng tương tư như trên những có sự thay đổi ở bước 4.

1. **Overview of the Simplified Version**
2. **Step by step fine-tuned**
3. **How to Use It**
4. **Example in Action**
4. **Limitations**: So sánh với kết quả từ đề xuất trước ([Reinforment learning](https://en.wikipedia.org/wiki/Reinforcement_learning))
5. **Try It Out**

---
![Bill splitter app](https://cdn3d.iconscout.com/3d/premium/thumb/split-bill-3d-icon-download-in-png-blend-fbx-gltf-file-formats--share-cut-invoice-receipt-payment-pack-finance-icons-7943935.png?f=webp){:width="auto" height="150px"}

Cuối cùng, sau một vài bước điều chỉnh và kết hợp dùng **Github Copilot** khi build, đây là kết quả sau 1 buổi sáng:
[Bill Splitter with Grok](https://play.sonkd.com/split-bill/)