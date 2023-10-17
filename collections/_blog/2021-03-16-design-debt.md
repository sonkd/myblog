---
title: "Design Debt"
layout: post
date: 2021-03-16 23:51:34
author: sonohyeah
image: /assets/img/blog/technical-debt-pentalog.png
headerImage: false
tag:
- Design
- Management

star: false
blog: true
hidden: false

---

# Có nợ thì phải trả. Sh💩.

Rõ ràng trong đời không có ai là muốn nợ nần (tiền bạc) cả. Dĩ nhiên đó là về mặt "lý thuyết". Có 3 kiểu người mà tôi đã quan sát được trong thực tế:
- Không thích nợ nần, và không nợ gì cả.
- Không thích nợ nần, nhưng vẫn nợ.
- (Nhận định của tôi) Thích nợ nần.

---

Trong product design có thuật ngữ [Design Debt](https://www.youtube.com/watch?v=pqeJFYwnkjE) ám chỉ việc thiết kế tập trung vào ngắn hạn mà gạt đi những ý tưởng tốt, có ích cho tương lai. Nói cách khác là những thiết kế tồi, không có tính bền vững, chỉ chăm chăm giải quyết vấn đề trước mắt. Điều này tôi thường thấy ở các beginner và intermediate designer. Và cũng có những kiểu: không thích nợ thiết kế, không thích nợ thiết kế nhưng vẫn nợ và luôn thích nợ.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pqeJFYwnkjE?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nếu để design debt xảy ra, chúng ta-những người nhận mình là designer xin đừng vinh danh **"lấy người dùng làm trọng tâm"** để bảo vệ cho ý tưởng của mình, nó không giải quyết vấn đề chính nào và cũng không đủ thuyết phục khi nói chuyện với các stakeholder.

Tình trạng mà tôi thấy mọi người hay gặp phải như câu chuyện "Đầu voi đuôi chuột". Chúng ta viện cớ những lý do khách quan như do vấn đề kĩ thuật hiện tại chưa đáp ứng, chiến lược kinh doanh chưa hoàn thiện, không có đủ budget, không có thời gian, ... và chúng ta vẫn "cố đấm ăn xôi" để cho ra một bản thiết kế với "life time" ngắn. Tất nhiên, chẳng mấy ai lại tiếp tục "trả nợ" vì luôn luôn lại vướng bận vào những vụ nợ nần khác (qua sprint này tới sprint khác, release này tới release khác).

# Design Debt thực sự là gì
![Design deb](/assets/img/blog/technical-debt-pentalog.png)

Lấy vài ví dụ đơn giản như sau:
- Phần phỏng vấn và khảo sát để nghiên cứu khách hàng không được thực hiện vì chưa có budget
- Một bản Ui prototype không được đem đi Usability testing vì không tuyển được ứng viên
- Một form thiết kế (quan trọng) không được chỉnh sửa nhất quán vì cả luồng sẽ được chỉnh sửa lại
- Ý tưởng thiết kế chỉ tập trung cho những thứ mà team tech xác nhận làm được trong giai đoạn này, và gọi đó là một ý tưởng khả thi

## Những tác nhân chính có thể dẫn đến Design Debt

### Các yếu tố khách quan
- Các manager (thượng tầng) tập trung xây dựng roadmap với đầy đủ các features "hay ho" có value với khách hàng, thị trường và đặc biệt là về mặt business, không thể giám sát những thay đổi nhỏ "bên dưới".
- Các leader (trung tầng) dẫn dắt để cân bằng thời gian thực thi, chi phí, sự cam kết, v.v dẫn đến việc trade-off các hạng mục.

### Các yếu tố chủ quan
- Designer luôn design với tầm nhìn ngắn hạn, 
- Chủ yếu focus vào **"WHAT"** thiếu sự tự vấn bản thân trả lời **"WHY"**, **"HOW"**
- Không hiểu rõ context design và design goal [ultimate goal](/blog/2021-03-07-the-ultimate-goal)

> Đặc biệt, đối với in-house design team chúng ta luôn tỏ ra hào hứng với những tính năng mới, nói về những gì chúng ta sẽ đạt được "WOW" mà ít khi nghĩ tới chúng ta sẽ phải đối mặt những gì. Hay "quên" trả lời câu hỏi "WHY".

# Ngăn ngừa Design Debt

Trong bài viết này liệt kê một số ví dụ điển hình những lý do dẫn đến **Design Debt**
[What is design debt and why you should treat it seriously](https://uxdesign.cc/what-is-design-debt-and-why-you-should-treat-it-seriously-4366d33d3c89#2bf4)

{% linkpreview "https://uxdesign.cc/what-is-design-debt-and-why-you-should-treat-it-seriously-4366d33d3c89#2bf4"%}

Phương pháp hữu hiệu nhất hiện này là chúng ta áp dụng **Design Thinking**, một phương pháp đi kèm với **Lean UX** giúp ngăn ngừa các designer thiết kế dựa trên assumption mà không kiểm chứng (nợ nần nhiều lâu dần thanh quen).

## Đối diện với sự thật và bỏ đi cái sĩ diện

> “There’s no shame in a project having design debt.”
> [Invsion, Insign Design](https://www.invisionapp.com/inside-design/tackle-design-debt/)

> “Tackling design debt? 
> Fix the most visible elements first.”

> “The best defense against design debt is a constant stream of feedback, both internal and external.”
