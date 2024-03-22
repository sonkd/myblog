---
title: "Các vấn đề về Nhận thức trong thiết kế trải nghiệm sản phẩm số"
layout: post
date: 2024-03-22 14:29:00
author: sonkd
image: /assets/img/blog/fish-sauce.png
tag:
- UX Design
- HCI
- Decision Making
- Cognition
- Behaviour

---

Hãy tưởng tượng thời điểm bạn đang lựa chọn một chai nước mắm trên kệ trong siêu thị, bạn phải mất bao lâu để thực sự đặt 1 chai vào giỏ? Tương tự khi mua ở một cửa hàng tạp hoá nhỏ, bạn có bao giờ tự hỏi tại sao cùng mua loại chai nước mắm đó, thời gian ra quyết định của bạn lại nhanh hơn khi mua ở siêu thị không? Đó chính là một dạng của **Vấn đề của Sự lựa chọn**.

# Càng nhiều lựa chọn, càng mất thời gian ra quyết định.
![The Paradox of Choice](/assets/img/blog/paradox-of-choice.png)

> Nghịch lý của sự lựa chọn ([Paradax of Choices](https://en.wikipedia.org/wiki/The_Paradox_of_Choice)) là một mô hình tinh thần (Mental Model) gợi ý rằng việc có nhiều lựa chọn để chọn lựa, thay vì làm cho mọi người hạnh phúc và đảm bảo họ có được thứ mình muốn, lại có thể khiến họ căng thẳng và gặp khó khăn trong việc đưa ra quyết định.

Các trang web hoặc ứng dụng mobile đều phải dẫn dắt và đưa người dùng vào các nhiệm vụ bấm 1 button hoặc tương tác với nội dung hiển thị trên màn hình (hay còn gọi là những "Call to action" hoặc Navigation). Những nhiệm vụ đó nếu được hoàn thành một cách đơn giản và nhanh chóng sẽ tăng khả năng Chuyển đổi (Conversation) các mục tiêu kinh doanh. Chính vì thế, những thiết kế trải nghiệm tốt là những thiết kế đem đến **Khả năng ra quyết định** dễ dàng đối với người dùng.

Ngày nay, các sản phẩm có xu hướng "[super app](https://www.adjust.com/blog/the-state-of-super-apps-2022-statistics-and-trends/)", do đó những vấn đề này càng trở nên thách thức với các nhà thiết kế trải nghiệm. Làm thế nào để cân bằng được mục tiêu và mong muốn kinh doanh mà vẫn giúp người dùng có được khả năng ra quyết định nhanh chóng và thoải mái.

# Tải nhận thức (Cognition load)
Con người sẽ tư duy dựa trên 2 hệ thống ([Xem thêm "Think Fast and Slow"](https://www.goodreads.com/en/book/show/11468377)): Tiềm thức và Có ý thức. Việc đánh đổi tính xác lấy tốc độ phản hồi của nhận thức giúp con người tiết kiệm được nhiều năng lượng cho việc xử lý thông tin của bộ não, giúp chúng ta trở nên thoải mái và tự tin hơn trong việc thực hiện các hành động, miễn là nằm trong ngưỡng chấp nhận được.

![Fast & Slow thinking, Daniel Kahneman](https://modelthinkers.com/storage/app/public/model_image/bizgdZntGFFXRJgwPmFgUkrXttLbVSD7bqlvzMyW.png)

Vì vậy, con người sẽ phải đối mặt đến những vấn đề về Tiếp cận và Xử lý thông tin trong quá trình Nhận thức.

**Các rào cản về nhận thức**
- Số bước cần thực hiện để đạt mục tiêu như kì vọng
- Độ "dài" về nhận thức (thời lượng để đọc-hiểu) của mỗi bước
- Độ khó về nhận thức (cần các hiểu biết chuyên môn, các thông tin tham chiếu, ...) của mỗi bước

**Tải nhận thức tương ứng với các rào cản**
- Số lượng lựa chọn mà người dùng có (được bày ra hoặc đề xuất)
- Lượng thông tin tư duy (cần xử lý) cần thiết
- Bối rối và Chọn lựa

Khi làm sản phẩm, cần phải test [Usability Testing](/blog/2023-12-27-usability-testing) để kiểm tra các prototype (mô phỏng giao diện ứng dụng) để đánh giá và đo lường khả năng sử dụng của người dùng:
- *Khả năng nhận thức*: Làm thế nào để người dùng hiểu những gì họ đang xem, mục đích, ý nghĩa của từ ngữ và các hành động dự kiến tiếp theo?
- *Khả năng học hỏi*: Với những trải nghiệm mới, người dùng có thể học và nhớ được những gì khi dùng ứng dụng
- *Định hướng*: Người dùng có khả năng tự tìm và khám phá ứng dụng và tự xác định được họ đang ở đâu và làm gì tại mỗi bước.
- *Nhiệm vụ* có được thực hiện thành công hay không?
- *Thoả mãn*: Người dùng có cảm thấy thoải mái/tự tin khi thực hiện nhiệm vụ mà không cần phải kiểm tra lại.

# Sự nhận thức trong tương tác "Người - Máy tính" (HCI)
Con người dùng các giác quan để nhận thức về thực tại và phản hồi thông tin đến não bộ để xử lý.
![A comprehensive list of human-computer interactions | by Chris R Becker | UX Collective](/assets/img/blog/hci.png)
<figcaption class="caption">Nguồn: <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fa-comprehensive-list-of-human-computer-interactions-d72eaca2c0df&psig=AOvVaw0AtrWoI6NhL7v6osYG-11N&ust=1711194498442000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCOD10Lnmh4UDFQAAAAAdAAAAABAY">A comprehensive list of human-computer interactions</a></figcaption>

Khi có nhu cầu muốn đạt điều gì đó mà tốn ít năng lượng nhất có thể, con người sẽ có xu hướng phối hợp đồng thời các giác quan để cùng xử lý bằng sự phân công hợp lý về mặt sinh học và quyết định bởi [**tâm lý hành vi**](https://www.simplypsychology.org/behaviorism.html).

Trong thiết kế sản phẩm số, kết hợp linh hoạt các chiều tương tác sẽ đem đến một trải nghiệm người dùng tổng thể và tối ưu nhất. Vì vậy, trải nghiệm cần được hiểu và xây dựng theo góc nhìn của sự tương tác (theo cả 2 mặt vật lý và tâm lý). Tìm hiểu thêm [5 chiều của Interaction design](https://www.interaction-design.org/literature/article/what-is-interaction-design).

# Mô hình tương tác Nhận thức
Sự lặp lại của tư duy nhận thức hình thành nên thói quen xử lý của một con người. Điều này được Norman đúc kết và phát biểu thành *Mô hình hành động 7 bước* và được Hartson kế thừa thành phiên bản "Chu kì tương tác" như bên dưới:
![Four types of affordances mapped to Norman’s action model.](/assets/img/blog/normans-action-model.png)
<figcaption class="caption">Nguồn: <a href="https://www.interaction-design.org/literature/book/the-encyclopedia-of-human-computer-interaction-2nd-ed/affordances%EF%BB%BF">Four types of affordances mapped to Norman’s action model.(Hartson 2003, p. 328).</a></figcaption>

Theo đó, kết quả của một pha **Hành động** sẽ dẫn đến sự điều chỉnh ở nhận thực ở pha **Phản hồi** để hướng đến những kết quả hiệu quả và ít nỗ lực hơn ở những lần sau. Điều đó lý giải tại sao các Vấn đề Tài nhận thức ở pha Phản hồi tác động trực tiếp đến khả năng ra quyết định của con người. 

Trong thiết kế sản phẩm, việc giảm tải nhận thức (Reduce cognitive load) trên mỗi bề mặt sản phẩm/màn hình thiết bị sẽ giúp người dùng có nhiều sự tập trung cũng như phải dành ít nỗ lực hơn. Từ đó hiệu quả của mỗi lượt ra quyết định trên từng hành động được cải thiện.
![Reduce cognitive load](/assets/img/blog/choices-in-digital-product.png)
<figcaption class="caption">Reduce cognitive load</figcaption>

# Giảm tải nhận thức
Hầu hết các nguyên nhân dẫn đến sự gia tăng tải nhận thức nằm ở:
- Quá nhiều lựa chọn (Hick’s Law)
- Yêu cầu suy nghĩ quá nhiều (Chunking effect)
- Thiếu tính rõ ràng: "Less is more" giúp giản lược yêu cầu xử lý thông tin nhưng nếu lạm dụng quá mức sẽ tăng độ khó về mặt nhận thức.

![LESS is MORE](/assets/img/blog/less-is-more.png)
<figcaption class="caption">Bớt nút bấm giúp bạn dễ thao tác nhanh hơn khi xem Tivi nhưng đôi khi lại bối rối vì việc "di chuyển" đến các tính năng phụ gặp khó khăn.</figcaption>

Tối thiểu hoá về *Tải nhận thức* sẽ giúp Tối đa hoá về *Khả năng sử dụng*. Các cách để giảm tải nhận thức trong thiết kế.
- Tránh sự lộn xộn và phân cấp thị giác không hợp lý: affordance cần đủ, rõ ràng và dễ hiểu đồng thời phân cấp phù hợp với hành vi được kì vọng của người dùng.
- Nên xây dựng dựa trên các **Mental model** đang tồn tại: hành động theo thói quen/bản năng giúp tiết kiệm năng lượng và tạo sự tự tin của người dùng.
- Giảm bớt các nhiệm vụ: bỏ các Action không cần thiết gây nhiễu thông tin hoặc không được ưu tiên.

# Kết luận

> “Don’t make me think", Steve Krug

Đây là lời khuyên nổi tiếng trong cuốn sách trùng tên của Steve Krug, một trong những cuốn sách được coi là sách đầu giường của các designer sản phẩm số. Trải nghiệm người dùng cần xây dựng dựa trên tâm lý và khoa học hành vi-cụ thể ở bài viết này ở góc nhìn **Nhận thức trong thiết kế**, nhờ đó sản phẩm mới đem lại hiệu quả tốt nhất.