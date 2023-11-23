---
title: "Flow - Dòng chảy phát triển sản phẩm"
layout: post
date: 2023-11-02 12:24:00
author: sonkd
image: 
tag:
- Product Development
- Product
- Culture
- Data

---

Điều gì là thách thức lớn nhất đối với một **Product manager** trong quá trình phát triển một sản phẩm digital hiện nay? Hàng tá các hạng mục cần sắp xếp và giải quyết luôn chờ đợi họ mỗi ngày. Những giấc ngủ hàng đêm luôn trăn trở *"Ngày mai sẽ làm gì nhỉ"*. Điều này còn "kinh khủng" hơn là *"Mình còn công việc nào chưa hoàn thành"*.

Trải qua hơn 2 năm làm ở vị trí Product lead cho start-up [Ready](https://ready.io), tôi có một số chiêm nghiệm cũng như một vài hướng tiếp cận để giải quyết những vấn đề này nhằm tránh được việc "đêm dài lắm mộng".

# Trò chơi ra quyết định

Bạn thấy đấy, vấn đề không phải nằm ở việc còn điều gì chưa làm xong mà là nên làm những điều gì tiếp theo. Bạn phải ra quyết định và tốt nhất chứ không phải nhanh nhất hoặc là hoản hảo nhất. Dẫu vậy, nguồn lực cũng như chiến lược ban đầu không cho phép bạn lựa chọn và chờ đợi, bạn phải ra quyết định: sớm nhất, tốt nhất và hiệu quả nhất.

<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="https://www.ibm.com/cloud/architecture/images/practices/hdd-diagram.png" alt="Hypotheses instead of requirements">
        <figcaption class="caption">Nguồn: <a href="https://www.ibm.com/garage/method/practices/learn/practice_hypothesis_driven_development/">IBM</a></figcaption>
    </div>
    <div class="toright">
        Trong thế giới đầy biến động của kinh doanh hiện đại, hai thế lực nổi bật "thách thức" chính đối với các nhà phát triển sản phẩm:
        <br><br>
        - Phải cung cấp các chức năng mới cho khách hàng trong khung thời gian ngày càng ngắn hơn vì thế giới đang chuyển động nhanh hơn bao giờ hết, được hỗ trợ bởi công nghệ mới và cách làm việc mới.
        <br><br>
        - Chỉ những sản phẩm tốt nhất về mọi mặt mới tồn tại được. Khi nằm ngoài "thương trường" đầy cạnh tranh-sản phẩm của bạn sẵn sàng bị thanh thế bởi đối thủ không những về tính năng, hiệu suất mà còn là những điểm cốt lõi trong trải nghiệm.
    </div>
</div>

**Tối ưu hóa cho những điều nhỏ nhất**

Đây là cuộc chơi về **Tốc độ** và **Chất lượng**, bạn phải quyết định nhanh hơn và hiệu quả hơn.

![Prioritization matrix](https://www.ibm.com/design/thinking/static/prioritization-4-197b008afe461550b6e77fb9ace7ddcf.jpg)
<figcaption>Prioritization Matrix. Công cụ hiệu quả mà tôi thường vận dụng trong team, nhờ đó nhanh chóng phân loai ưu tiên các hạng mục cần giải quyết.</figcaption>
<br>
Trong blog [The ultimate goal - Mục tiêu tối thượng](/blog/2021-03-07-the-ultimate-goal) tôi có đề cập đến cuốn sách *"Think Fast and Flow"* nói về 2 Con người trong tâm trí chúng ta tác động đến khả năng ra quyết định. Với những hoàn cảnh như trên, tôi tin rằng hầu hết chúng ta có xu hướng dùng Con người 1-*Tư duy nhanh và dùng trực giác theo bản năng* để đưa ra kết luận. Điều đó dễ dàng hợp lý mọi tình huống khi áp lực thời gian luôn đè nặng. 

Tôi từng quan sát nhiều tình huống mà ở đó các nhà quản lý sản phẩm lựa chọn đôi khi chỉ là "gieo đồng xu" với hy vọng tốc độ bù chất lượng, hoặc với một lối suy nghĩ "ngụy biện" là "Không thành công thì cũng thành nhân", "Just do it and go ahead". Thậm chí, trong nhiều tình huống họ phải tự trấn an điều đó bằng cách sử dụng các số liệu định lượng một cách có chủ đích, điều này minh họa tiêu biểu cho vấn đề [Confirmation Bias](https://en.wikipedia.org/wiki/Confirmation_bias) và [Framing bias](https://en.wikipedia.org/wiki/Framing_effect_(psychology)). Đôi khi vì tính chất công việc mà lại cuốn vào một mục tiêu khác, dần dần mọi thứ lại quên lãng như các vấn đề về Technical Debt hay [Design Debt](/blog/2021-03-16-design-debt). Và tôi gọi đó là **Flow trong phát triển sản phẩm**. Một flow tốt không chỉ work trong ngắn hạn mà phải thực sự work trong dài hạn, nếu không sẽ rất dễ dẫn đến hiện tượng "Boiling the frog".

# Flow - Dòng chảy phát triển sản phẩm
![Flow](/assets/img/under-sea.gif)
Cũng như mọi trăn trở và các [framework](https://fourweekmba.com/product-development-frameworks/) phát triển sản phẩm khác, mọi hành động và suy nghĩ đều hướng đến những thành quả (outcome) trong dài hạn mà doanh nghiệp mong muốn.

> Làm thế nào xây dựng **Flow** mà ở đó giúp việc phát triển sản phẩm giúp team grow một cách bền vững, duy trì liên tục mà thoả mãn:
- Khả năng ra quyết định nhanh và hiệu quả cao trong ngắn hạn
- Đột phá về lâu dài
- Thích ứng trong mọi tình huống

# Xây dựng văn hoá ra quyết định dựa trên giả thuyết

### Hạn chế các ý kiến bị thiên kiến (bias)
...

### Xây dựng các nhịp làm việc và văn hoá chia sẻ phản hồi
...

### Điều chỉnh liên tục cho đến khi mọi thứ trôi chảy
...