---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'Danh sách cách Aavegotchi Improvement Proposals (AGIPs)'
contributors:
  - "unintelligent-nerd"
---

Chào mấy fen. Tham dự vào Aavegotchi Improvement Proposals (AGIPs) là điều mà những gotchi có trách nhiệm sẽ làm! Bạn cần phải bỏ phiếu và tiếng nói của bạn sẽ được thể hiện.

Cộng đồng của chúng ta đã phát triển đến mức nào rồi? Hãy xem qua thông tin lưu trữ về những lần bầu chọn đã qua tại đây nhé!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Tăng lượng Tap để Phát Triển Sâu Rộng</a></li>
<li><a href=#add-fees-to-bonding-curve>Thêm Phí Giao Dịch Vào Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Tăng lượng tap từ DAICO để mua lại GHST</a></li>
</ol>

</div>

### Tăng lượng Tap để Phát Triển Sâu Rộng
**Aavegotchi Improvement Proposal #1**

**Tóm tắt đề xuất:** GHST Bonding Curve đã hoạt động được gần một tháng và điều đó có nghĩa là cơ hội để những người nắm giữ token GHST có thể điều chỉnh cơ chế tap của DAICO đã đến. AavegotchiDAO 1.0 được xây dựng trên nền tảng của Aragon và hoạt động trực tiếp với DAICO, nơi mà những người nắm giữ GHST có thể bỏ phiếu mỗi tháng một lần xem nên tăng hoặc giảm dòng tiền ngân quỹ dành cho team phát triển thông qua cơ chế tap. Cơ chế tap cung cấp lượng DAI được trích trực tiếp từ 7.5 triệu DAI được giữ trong GHST Bonding Curve.

Bọn mình đã kêu gọi cộng đồng Aavegotchi bầu chọn xem có nên tăng lượng tap từ 50k DAI/30 ngày thành 100k DAI/30 ngày hay không. 50k DAI không đủ để trang trải chi phí cho tất cả những thành tựu mà dự án đã đạt được (phát triển cộng đồng, token GHST, phát triển game), và những bước nhảy vọt tiếp theo sẽ còn đầy tham vọng hơn nữa. Những ràng buộc trong bộ code của AavegotchiDAO 1.0 giới hạn bản khuyến nghị này trong khuôn khổ chỉ có 50k DAI được thêm vào trong giai đoạn bầu cử của tháng này và do đó bọn mình đã khởi xướng trong đầu một chiến lược có mức ngân sách lên đến 100k DAI.

Ngân sách 50k DAI thêm vào sẽ được dùng trong 4 hạng mục khác nhau:
* Quỹ làm game giúp bọn mình có thể hoàn thiện thương lượng với những lập trình viên game chủ chốt.
* Những bản hợp đồng bổ sung dành cho những vị trí then chốt của các lĩnh vực marketing, design, và phát triển.
* Một bước tạo đà trong marketing giúp nhân rộng sự hiện diện của Aavegotchi.
* Phần thưởng dành cho cộng đồng để bọn mình có thể tiếp tục phát triển những chương trình (như team Aartists hay Aaprentices) nhằm tưởng thưởng cho những ai có nhiều cảm hứng nhất trong cộng đồng bọn mình.

**Thời gian vote:**15 - 19 tháng Mười 2020

**Kết quả:**

Yes: 2540143.23957 GHST

No: 601.83249 GHST

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

### Thêm Phí Giao Dịch Vào Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Tóm Tắt Bản Đề Nghị:** Bonding curve là nguồn thanh khoản chính của GHST. Những người mua và người bán số lượng lớn trong hiện tải không phải trả bất kỳ loại phí nào.

Trình tạo thị trường của chúng tôi có khả năng thêm phí vào các lệnh mua và bán.

Nhiều thành viên trong cộng đồng đã đề xuất thêm vào 0.3% phí giao dịch cho các hoạt động mua bán diễn ra trên bonding curve.

Việc này có thể được thực hiện khi gọi hàm `updateFees` trên bonding curve của bọn mình, nhưng điều này có nên được thực hiện hay không? Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi.

Mọi loại phí sẽ tự động được chuyển đến địa chỉ của ngân quỹ DAO tại 0xffe6280ae4e864d9af836b562359fd828ece8020 và nó sẽ được xem là tài sản của AavegotchiDAO.

**Thời gian vote:**18 - 21 tháng Mười 2021

**Kết quả:**

Yes: 3726567.25851 GHST

No: 108143.33932 GHST

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

### Tăng lượng tap từ DAICO để mua lại GHST
**Aavegotchi Improvement Proposal #3**

**Tóm tắt bản đề nghị:**Phần thưởng cho người chơi và phần thưởng khuyến khích thanh khoản là rất quan trọng để có thể tạo đà phát triển cho hệ sinh thái Aavegotchi đến mức độ mà nó có thể tự duy trì dựa trên khối lượng giao dịch và các hoạt động kinh tế.

Bất cứ khi nào GHST được tiêu xài trong hệ sinh thái Aavegotchi, 33% trong số đó sẽ tự động được gửi đến địa chỉ đốt. Không giống như hầu hết những đồng tiền điện tử khác, việc đốt GHST (trừ trường hợp thông qua bonding curve) sẽ không làm giảm tổng giá trị của GHST, bởi giá trị đó được lưu giữ bởi lượng DAI ở trong bonding curve.

Tác dụng của việc đốt token là để giữ DAI ở trong bonding curve, góp phần quan trọng trong việc tăng tỷ lệ lưu trữ theo thời gian, giúp ổn định giá của GHST.

Để có thể bắt đầu việc đốt token (việc mà cuối cùng có thể biến GHST là một đồng stablecoin), bọn mình khuyên cộng đồng nên tăng lượng tap lên thành 150.000 DAI mỗi tháng. Điều này sẽ giúp cho số dư được lưu giữ trong bonding curve, cùng lúc đó cũng cung cấp thêm 50.000 DAI mỗi tháng để tài trợ cho phần thưởng dành cho người chơi và khuyến khích thanh khoản.

**Thời gian vote:**18 - 21 tháng Mười 2021

**Kết quả:**

Yes: 3836093.44669 GHST

No: 33683.04753 GHST

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)