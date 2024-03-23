---
title: "Cái nhìn tổng quan về Usability Testing trong phát triển sản phẩm"
layout: post
date: 2023-12-27 12:24:00
author: sonkd
image: https://usabilitygeek.com/wp-content/uploads/2020/06/website-usability-testing.width-750.png
tag:
- Product Development
- UX Research
- Usability Testing

---

## Build the Right Thing

Trong xu hướng phát triển sản phẩm hiện nay, việc kiểm tra và ngăn ngừa các vấn đề về chất lượng sản phẩm trước khi release là một trong những khâu tiên quyết bắt buộc phải có ở mọi quy trình. Đặc biệt là việc [Kiểm thử khả năng sử dụng (Usability Testing)](https://www.nngroup.com/articles/usability-testing-101/) ở ngay những bước Design trước khi team quyết định có thực hiện phát triển tính năng đó hay không.

Khác với UI Designer hay UX Copywriter, UX Researcher, họ cần quan sát thực tiễn để trả lời những câu hỏi *"Thiết kế/Từ ngữ này có hoạt động hiệu quả với người dùng mục tiêu hay không?"*, *"Thiết kế/Từ ngữ này có thể làm tốt hơn ở điều gì không?"* hoặc *Hành vi của người dùng khi tương tác với thiết kế/từ ngữ thực tế ra sao?*.

> Build The Right Thing and Build The Thing Right

Đối với team phát triển sản phẩm dựa trên nền tảng **Customer Centric**, việc thực hiện Usability Testing sẽ giúp team tránh được [Bẫy căn chỉnh](https://sloanreview.mit.edu/article/avoiding-the-alignment-trap-in-it/). Mục tiêu quan trọng nhất và đầu tiên là "Build the Right Thing". Điều này được hiểu rằng team nên dành công sức để phát triển và tối ưu những thứ thực sự có giá trị và tiềm năng tăng trưởng, thay vì làm những thứ tưởng chừng rất phù hợp kèm ít nỗ lực thực thi.

![Crash testing](https://www.thoughtco.com/thmb/zUrqtdatkRyw40uwI6ORHVw5lIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-104574305-5b5b7e6cc9e77c0050acfb52.jpg)
<figcaption class="caption">Nguồn: <a href="https://www.thoughtco.com/history-of-crash-test-dummies-1992406">https://www.thoughtco.com/history-of-crash-test-dummies-1992406</a></figcaption>

Các kết quả UT sẽ cho thấy trước khả năng hoạt động hiệu quả của thiết kế ngay trước khi nó được bắt đầu được phát triển. Từ đó team sẽ tiết kiệm được rất nhiều chi phí maintain và improve các vấn đề về lỗi trải nghiệm người dùng cũng như không phải xây dựng những tính năng không có "giá trị" về dài hạn.

## Mục đích của Usability Testing (UT)

Là một dạng của phương pháp [Black box testing](https://en.wikipedia.org/wiki/Black-box_testing) trong khâu Design, mục đích UT không chỉ dừng ở việc ngăn ngừa "lỗi thiết kế", mà còn giúp designer hiểu và nhìn thấy được cách nó hoạt động-phần chìm của tảng băng.

> ”Most people make the mistake of thinking design is what it looks like,” ”People think it’s this veneer — that the designers are handed this box and told, ‘Make it look good!’ That’s not what we think design is. It’s not just what it looks like and feels like. Design is how it works.”
Steve Jobs

Làm thế nào để kiểm tra được một thiết kế là hoạt động được với khách hàng tiềm năng trong môi trường thực tế và đúng ngữ cảnh của họ?

## Think - Make - Check

Lean UX là một cách tiếp cận dựa trên "nhóm" để xây dựng các sản phẩm tốt hơn bằng cách tập trung ít hơn vào thiết kế lý tưởng về mặt lý thuyết mà tập trung nhiều hơn vào việc học tập lặp đi lặp lại, trải nghiệm người dùng tổng thể và kết quả của khách hàng. Vì vậy việc chấp nhận sai và sửa sai là một phương châm căn bản khi theo hướng tiếp cận này.

<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2FNaCA0Jd5EtPxApQ6XI6Tb%2Fc44579a8e9c01a70a4317a34bb44d10e%2FCopy20of200120Featured20image.width-1500.jpg&w=946&q=75" alt="Lean UX">
        <figcaption class="caption">Lean UX</figcaption>
    </div>
    <div class="toright">
        <b>Quá trình thiết kế</b><br>
        - Tạo prototype thiết kế<br>
        - Tìm kiếm người dùng thử nghiệm phù hợp<br>
        - <b>Thiết lập và kiểm tra</b><br>
        - Phản chiếu (reflection) để tìm điểm cần khắc phục và những cơ hội mới chưa khám phá thông qua kết quả thử nghiệm.
    </div>
</div>

## Bốn khía cạnh chính của prototype (Human-Computer Interaction)
![Prioritization matrix](/assets/img/blog/4-principles-of-prototype.png)
 <figcaption class="caption">What do Prototypes Prototype?. <a href="https://hci.stanford.edu/courses/cs294h/2006/readings/houde-prototypes-97.pdf">Nguồn</a></figcaption>

Để hiểu về vài trò và chức năng của nguyên mẫu, cần dựa theo 4 nguyên lý sau:
- **Role**: facilitator tập trung mô tả chức năng người dùng có thể hưởng lợi từ đó mà không cần quan tâm nhiều đến hình thức và cảm nhận của hiện vật hoặc cách thức hoạt động của nó. (người tham gia chỉ tập trung thực hiện các task được giao và hiểu rằng đây là bản mockup, không chính thức bất cứ đâu)
- **Look and feel**: Các nguyên mẫu nhìn và cảm nhận được xây dựng chủ yếu để khám phá và chứng minh các tùy chọn cho trải nghiệm cụ thể về một tạo phẩm (artifact) hoặc ứng dụng mô phỏng (digital application). Chúng mô phỏng cách nhìn và tương tác của nó mà không nhất thiết phải điều tra vai trò của nó trong cuộc sống của người dùng hoặc cách thức hoạt động của nó.
- **Implementation**: Một số nguyên mẫu được chế tạo chủ yếu để trả lời các câu hỏi kỹ thuật về cách một tạo tác trong tương lai có thể được tạo ra để hoạt động. Chúng được sử dụng để khám phá các phương pháp mà theo đó có thể đạt được các thông số kỹ thuật đầy đủ cho tạo phẩm cuối cùng—mà không cần xác định hình thức và cảm nhận hoặc vai trò của nó đối với người dùng.
- **Integration**: Các nguyên mẫu tích hợp được xây dựng để thể hiện trải nghiệm người dùng hoàn chỉnh về một tạo phẩm/sản phẩm/ứng dụng mô phỏng. Chúng là tập hợp thiết kế dự định của tạo tác về vai trò, giao diện và cách triển khai.

Vì vậy, chúng ta sẽ cố gắng tạo ra nguyên mẫu có khả năng sát với “mô trường thực tế” nhất có thể, nhờ đó các kết quả thử nghiệm thu được sẽ hữu ích và có giá trị.

## Các mục tiêu thực hiện UT
- **Test concept thiết kế**: tập trung vào wireframe (low-fidelity prototype) => người tham gia không bị noise bởi các yếu tố vật lý như visual graphic/âm thanh/rung động, khi đó họ sẽ tập trung vào các task chính được giao (Role) với mục đích tìm hiểu cách user flow hoạt động.
- **Test thiết kế tương tác (interaction design)**: tạo các yếu tố liên kết về mặt tương tác vật lý như nghe/nhìn/chạm để đánh giá khía cạnh “look and feel". VD: gắn các hiệu ứng về visual như transition/animation/timing/sound/...
- **Test performance của một giải pháp**: ví dụ test luồng eKYC với ứng dụng mobile app, độ trễ về sự phản hồi cũng như tỷ lệ xử lý thất bại về mặt công nghệ sẽ ảnh hưởng trực tiếp đến khả năng hoàn thành “task” của người dùng. Điều này không thể kiểm tra được thông qua các prototype design. Trường hợp này tương đương với phương pháp User Acceptance Testing (UAT).

Đặc biệt lưu ý một số nhầm lẫn điển hình khi thực hiện UT đó là tìm phương án được đánh giá tốt nhất trong các lựa chọn (nhầm lẫn với A/B Testing).

> Triển khai UT không dùng để thẩm định (validation) một phương án thiết kế, không có kết qủa Đúng hay Sai, chỉ nên dùng để tìm điểm cần khắc phục và những cơ hội mới chưa khám phá thông qua kết quả thử nghiệm.

Để khai thác kết quả UT hiệu quả và tránh những hiểu lầm phổ biến, dựa trên 4 khía cạnh chính của một prototype việc thực hiện UT sẽ tập trung vào những điểm sau:
1. **Task Success**: Người dùng có hoàn thành nhiệm vụ được đặt ra không?
2. **Discoverability**: Người dùng có thể tìm thấy thông tin hoặc sự tương tác của tất cả các tác vụ không?
3. **Comprehension**: Làm thế nào để người dùng hiểu những gì họ đang xem, mục đích và ý nghĩa của từ ngữ cũng như các hành động mong đợi từ họ?
4. **Learnability**: Để có trải nghiệm mới, người dùng có thể học và ghi nhớ cách sử dụng ứng dụng/tính năng trên web không?
5. **Orientation**: Người dùng có thể tìm đường đi xung quanh ứng dụng, tới đó và quay lại không? Họ có xác định được họ đang ở đâu tại các điểm chính trên web không?
6. **Satisfaction**: Người dùng có cảm thấy tự tin rằng nhiệm vụ đã được hoàn thành một cách hiệu quả mà không cần phải kiểm tra lại không?

## Phương pháp thực hiện UT

Có nhiều hình thức thực hiện test UT linh hoạt trong nhiều điều kiện và môi trường khác nhau. Đối với các thiết kế ứng dụng mobile, điển hình nhất là 2 hình thức Giám sát từ xa hoặc trực tiếp (Remote hoặc In-person moderated).

<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/assets/img/photo_wall/unmoderated.jpg" alt="Remote moderated">
        <figcaption class="caption">Giám sát từ xa, phù hợp trong tình huống các ứng viên không thể tham gia tại trụ sở/phòng lab.</figcaption>
    </div>
    <div class="toright">
        <img class="image" src="/assets/img/blog/in-person-moderated.jpeg" alt="In-person moderated">
        <figcaption class="caption">Giám sát tại chỗ.</figcaption>
    </div>
</div>

Để thực hiện test UT cho mỗi bản prototype, chúng ta chỉ cần test với khoảng [5-7 ứng viên là vừa đủ](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) các dữ kiện quan sát.

Tuy nhiên, một số tình huống cần test rộng hơn nhằm tìm hiểu tính hiệu quả theo hành vi của mỗi nhóm người dùng khác nhau (customer segments). Trong những trường hợp như vậy, việc tuyển chọn ứng viên thoả mãn các tiêu chí cần kĩ lưỡng nhằm tránh các kết quả sai lệch không như mong muốn.

- Đừng nên test với những ứng viên là đồng nghiệp cùng làm trong dự án hoặc cùng chuyên ngành/lĩnh vực sản phẩm (trừ khi họ là những khách hàng mục tiêu), hay những người dùng tech-savy. Đây là những nhóm người dùng có thể dễ dàng hoàn thành nhiệm vụ do có sẵn kiến thức hoặc am hiểu về tính chất sản phẩm. Khi đó người quan sát có ít thông tin để khai thác về hành vi và cách design thực sự làm việc với số đông người dùng.
- Accessible Design: Một thiết kế tốt là ngay cả khi những người khiếm khuyết (disablers) cũng có thể dễ dàng sử dụng. Điều đó đem đến rất nhiều [lợi ích](https://www.interaction-design.org/literature/article/3-reasons-why-accessible-design-is-good-for-all) về mặt business (tiếp cận được số đông-ít năng lực sử dụng và hiểu biết công nghệ), về mặt legal sẽ tiếp cận được người dùng ở một số quốc gia có tiêu chuẩn cao (ví dụ thoả mãn tiêu chuẩn [W3C](https://www.w3.org/standards/about/) hay các tiêu chuẩn người khuyết tật).

## Tổng kết

Để "build the right thing", chúng ta cần hiểu sâu về cách mà thiết kế của sản phẩm đó hoạt động. Việc thực hiện UT ngay ở những bước design concept cho phép team giảm lược và loại bỏ được các tính năng không có giá trị lâu dài, ngăn ngừa các lỗi về tương tác hành vi (HCI), khai thác các cơ hội tiềm năng nếu cải tiến hoặc thực hiện các design mới phù hợp với hành vi người dùng.