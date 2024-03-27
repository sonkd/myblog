---
title: "Ways of working on Figma-DesignOps"
layout: post
date: 2023-08-25 14:51:00
author: sonkd
image: /assets/img/blog/design-collaboration-levels.png
tag:
- Design Ops
- Design management

---

## Các vấn đề của DesignOps

Khi đặt dưới môi trường làm việc đội nhóm đòi hỏi tính tương tác cao, các phương pháp hay kĩ thuật cần có tính *Khả thi* cho mọi người, đặc biệt là outcome đem lại phải đáp ứng yêu cầu về **thời gian**, **tính chính xác** hay **đồng nhất**, **kế thừa** và khơi gợi được **cảm hứng** khi làm việc với nhau.

2 phương châm khi cộng tác:
- 🎯Collaboration for the common goal
- 💰Doing Things right and doing the Right things

👉 Tổ chức/sắp xếp các công việc theo cách nhằm cải thiện **khả năng và năng lực cộng tác** giữa các designer với nhau, đồng thời **tăng được tốc độ và chất lượng khi hand-off các nguyên liệu thiết kế** đến các developers.

![Visibility and Speed](/assets/img/blog/visibility-speed.png)
<figcaption>DesignOps challenges. Apply the 80-20 rule to balance speed and visibility.</figcaption>

## 5 collaboration principles

Tôi đã vận dụng phương pháp của [Spotify](https://spotify.design/article/how-spotify-organises-work-in-figma-to-improve-collaboration) giải quyết những vấn đề này. 5 nguyên lý cộng tác để cân bằng **SPEED** và **VISIBILITY** nhằm giúp tăng tốc workflow của designers và “show-off” với những designer/stakeholder khác trong các cross-projects.

![DesignOps collaboration's principle](/assets/img/blog/designops-principles.png)
- Thiết kế này đã bám theo design guideline chưa? Có đồng nhất với các thiết kế khác trong hoàn cảnh tương tự không?
- Quy hoạch/Quản lý file thiết kế như nào để dễ truy cập/dễ tìm khi cần
- Thiết kế tốt là thiết kế được tái sử dụng được nhiều và có sự liên quan đến các thiết kế khác. (Sự phát triển thiết kế là sự kế thừa từ thiết kế có sẵn, không phải là sự bùng nổ về “nguyên liệu” hay component)
- Ở cấp độ “địa phương-local component”, mỗi team sẽ chủ động và tự động hoá phân chia, tuy nhiên khi giao tiếp ở cấp độ “global-toàn cục” thì cần thoả mãn 4 cấp độ bên trên.

## Design Collaboration Levels

3 cấp độ giao tiếp thiết kế:

<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/assets/img/blog/design-collaboration-levels.png" alt="Design Collaboration Levels" style="height: 300px">
        <br>
        <b>Framework:</b><br>
        - Teams: Giao tiếp ở cấp độ Global gồm các file library dùng chung ở layer Foundation và OS version (mobile/web)<br>
        - Projects: Giao tiếp local nội bộ của mỗi team<br>
        - Specs: Giao tiếp chi tiết và tài liệu hoá để hand-off cho Dev<br>
    </div>
    <div class="toright">
        <img class="image" src="/assets/img/blog/design-single-source-of-true.png" alt="Design Single Source of True" style="height: 300px">
        <br>
        <b>Single source of True</b><br>
        - Provides design assets, code, and documentation<br>
        - Builds on the other systems<br>
        - Is actively maintained by a dedicated team<br>
        - Has a defined interface for engineers to work with<br>
    </div>
</div>

**Vấn đề quản lý file thiết kế**
![Figma files](/assets/img/blog/figma-files.png)
<figcaption>Figma files.</figcaption>
- File tôi cần đâu nhỉ?
- Cái này đã có chưa để mình tạo mới nhỉ?
- Mình có vài ý tưởng và phát hiện mới, không biết nên tạo mới và để ở đâu nhỉ?
- Cái này đã được review và feedback chưa?
- Cái nào là cập nhật mới nhất như đã thống nhất nhỉ?

## Teams

Ở Ready, chúng tôi phân chia thành các Teams theo mỗi chapter riêng biệt.

- Ready Mobile
- Ready Website
- Ready Swap   
- Ready Community

## Projects

Design process với 3 bước

![Design process](/assets/img/blog/ready-design-process.png)

Hỗ trợ các designer và developer có thể dễ dàng truy cập và tìm kiếm các thiết kế nhanh chóng và chính xác:

- Design Delivery (Specs): tài liệu cập nhật chi tiết và đầy đủ thiết kế dành cho Dev.
- Các project khác được chia thành từng Feature, mỗi feature có thể nhiều Customer journey khác nhau (tương đương 1 file).

<div class="side-by-side">
    <div class="toleft">
        Quy hoạch mới các Project trên Figma 
        <img class="image" src="/assets/img/blog/figma-files-structure.png" alt="Quy hoạch mới các Project trên Figma">
        <br>
    </div>
    <div class="toright">
        Cấu trúc của một file thiết kế Journey <br>
        <img class="image" src="/assets/img/blog/journey-file-structure.png" alt="Cấu trúc của một file thiết kế Journey" style="height: 300px">
    </div>
</div>


## Specs

A team should have one project to store all of their specs. That means the source of truth won't live in the same file as your explorations and sketches.

There are three drivers behind this decision:

1. It makes it easier for us to identify existing solutions and patterns within a product.
2. It encourages us to align with other features as much as possible before we start building.
3. People will always know where to find the source of truth.

![A Spec file](/assets/img/blog/specs-file.png)
<figcaption>Mỗi flow nên đặt thêm bên cạnh trạng thái thiết kế của bản trước đó (nếu có) để tiện dễ dàng cho Developer và những Designer khác đối chiếu.</figcaption>