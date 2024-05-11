---
title: Data structure and Algorithm
layout: post
date: 2021-02-15 11:06
tag:
- Algorithm
- Data Structure
- Big Data
- Computer Science
image:
description: "Tổng hợp và chia sẻ những kiến thức liên quan tới giải thuật nói chung và lý thuyết khoa học máy tính nói riêng."
---

Nguồn: https://www.giaithuatlaptrinh.com/

## Các kĩ thuật thiết kế thuật toán cơ bản

    1. [Phương pháp quay lui](http://www.giaithuatlaptrinh.com/?p=58)
    2. Chia để trị: [cơ bản](http://www.giaithuatlaptrinh.com/?p=48), [quick sort và merge sort](http://www.giaithuatlaptrinh.com/?p=41), [chọn median](http://www.giaithuatlaptrinh.com/?p=35).
    3. Quy hoạch động: [I](http://www.giaithuatlaptrinh.com/?p=66), [II](http://www.giaithuatlaptrinh.com/?p=78), [III](http://www.giaithuatlaptrinh.com/?p=99), [IV](http://www.giaithuatlaptrinh.com/?p=112), [V](http://www.giaithuatlaptrinh.com/?p=130)
        1. Các kĩ thuật cải tiến: [I](http://www.giaithuatlaptrinh.com/?p=152), [II](http://www.giaithuatlaptrinh.com/?p=157), [III](http://www.giaithuatlaptrinh.com/?p=176), [IV](http://www.giaithuatlaptrinh.com/?p=186)
        2. Quy hoạch động [trên cây](http://www.giaithuatlaptrinh.com/?p=1968).
    4. Thuật toán [tham lam](http://www.giaithuatlaptrinh.com/?p=198).
    5. Lý thuyết [matroid](http://www.giaithuatlaptrinh.com/?p=201).

---

## Thuật toán ngẫu nhiên
    1. [Xác suất cơ bản](http://www.giaithuatlaptrinh.com/?p=204).
    2. [Quicksort ngẫu nhiên](http://www.giaithuatlaptrinh.com/?p=950) và chọn median.
    3. Phép băm
        - [Bảng băm](http://www.giaithuatlaptrinh.com/?p=967)
        - Cơ sở toán học: [hàm băm](http://www.giaithuatlaptrinh.com/?p=980), [xích ngăn cách](http://www.giaithuatlaptrinh.com/?p=983), [băm địa chỉ mở và băm hoàn hảo](http://www.giaithuatlaptrinh.com/?p=985).
    4. Thuật toán [Miller-Rabin](http://www.giaithuatlaptrinh.com/?p=278) kiểm tra tính nguyên tố
    5. Phân tích ra thừa số: thuật toán [vét cạn](http://www.giaithuatlaptrinh.com/?p=341), thuật toán [Pollard-Rho](http://www.giaithuatlaptrinh.com/?p=393)

---

## Lý thuyết đồ thị
    1. Cơ bản về đồ thị:
        - [Khái niêm](http://www.giaithuatlaptrinh.com/?p=553) về đồ thị.
        - [Sắp xếp Topo](http://www.giaithuatlaptrinh.com/?p=590).
        - Tìm thành phần [liên thông mạnh](http://www.giaithuatlaptrinh.com/?p=1680).
        - [Thuật toán Tarjan](http://www.giaithuatlaptrinh.com/?p=2593).
        - [Đồ thị phẳng](http://www.giaithuatlaptrinh.com/?p=2701).
        - [Trò chơi bắt trộm](http://www.giaithuatlaptrinh.com/?p=2725).
    2. Đường đi ngắn nhất:
        - Thuật toán [Dijkstra](http://www.giaithuatlaptrinh.com/?p=764) và các [cách thực thi](http://www.giaithuatlaptrinh.com/?p=838) .
        - Thuật toán [Bellman-Ford](http://www.giaithuatlaptrinh.com/?p=789) cho đồ thị có trọng số âm.
        - Thuật toán [Floyd-Warshall](http://www.giaithuatlaptrinh.com/?p=814) cho đồ thị dầy.
        - Thuật toán [Johnson](http://www.giaithuatlaptrinh.com/?p=874) cho đồ thị thưa.
    3. Cây khung nhỏ nhất:
        - Thuật toán [Tổng quan](http://www.giaithuatlaptrinh.com/?p=1266).
        - Thuật toán [Kruskal](http://www.giaithuatlaptrinh.com/?p=1140).
        - Thuật toán [Prim](http://www.giaithuatlaptrinh.com/?p=1175).
        - Thuật toán [Boruvka](http://www.giaithuatlaptrinh.com/?p=1204).
        - Thuật toán [Klein-Karger-Tarjan](http://www.giaithuatlaptrinh.com/?p=1297).
    4. Luồng trong mạng:
        - Thuật toán [Ford-Fulkerson](http://www.giaithuatlaptrinh.com/?p=1483).
        - Thuật toán [Edmonds-Karp](http://www.giaithuatlaptrinh.com/?p=1539).
        - Một số [biến thể](http://www.giaithuatlaptrinh.com/?p=1569) của luồng cực đại.
        - Một số [ứng dụng](http://www.giaithuatlaptrinh.com/?p=1617) của luồng cực đại.
    5. Lát cắt cực tiểu :
        - Thuật toán [Stoer-Wagner](http://www.giaithuatlaptrinh.com/?p=1662).
    6. Cặp ghép :
        - Cặp ghép trong [đồ thị hai phía](http://www.giaithuatlaptrinh.com/?p=2169).
        - Thuật toán [Hopcroft-Karp](http://www.giaithuatlaptrinh.com/?p=2212).
        - Giải thuật [đấu thầu](http://www.giaithuatlaptrinh.com/?p=2658).
        - [Ứng dụng](http://www.giaithuatlaptrinh.com/?p=2324) của cặp ghép trong đồ thị hai phía.
    7. Lý thuyết phổ đồ thị
        1. [Bài I](http://www.giaithuatlaptrinh.com/?p=1358) -- Introduction.
        2. [Bài II](http://www.giaithuatlaptrinh.com/?p=1373) -- Rayleigh quotient and Cheeger Inequality.
        3. [Bài III](http://www.giaithuatlaptrinh.com/?p=1406) -- Phổ của đồ thị đặc biệt.
        4. [Bài IV](http://www.giaithuatlaptrinh.com/?p=1450) -- Phổ của ma trậ kề và bài toán tô màu.

---

## Phương pháp MWU
    1. Bài toán [tham khảo chuyên gia](http://www.giaithuatlaptrinh.com/?p=2476) - phần I.
    2. Bài toán [tham khảo chuyên gia](http://www.giaithuatlaptrinh.com/?p=2486) - phần II.
    3. Ứng dụng [MWU trong các zero-sum game](http://www.giaithuatlaptrinh.com/?p=2519).
    4. Ứng dụng [MWU trong thuật toán Winnow](http://www.giaithuatlaptrinh.com/?p=2559).

---

## Tìm kiếm chuỗi
    1. Thuật toán [Knuth-Morris-Pratt](http://www.giaithuatlaptrinh.com/?p=238).
    2. [Máy trạng thái hữu hạn](http://www.giaithuatlaptrinh.com/?p=687) và thuật toán KMP.
    3. [Z algorithm](http://www.giaithuatlaptrinh.com/?p=250)
    4. Thuật toán [Boyer-Moore](http://www.giaithuatlaptrinh.com/?p=245)
    5. Thuật toán [Rabin-Karp](http://www.giaithuatlaptrinh.com/?p=290)
    6. Thuật toán [Aho-Corasick](http://www.giaithuatlaptrinh.com/?p=703) tìm kiếm đa mẫu.
    7. Cây hậu tố: [cơ bản](http://www.giaithuatlaptrinh.com/?p=420), [thuật toán Mccreight](http://www.giaithuatlaptrinh.com/?p=451),
    8. Mảng hậu tố: [cơ bản](http://www.giaithuatlaptrinh.com/?p=488), thuật toán SA-IS.

---

## Big Data
    1. [5 công cụ xác suất](http://www.giaithuatlaptrinh.com/?p=2623).
    2. [Hệ thống gợi ý](http://www.giaithuatlaptrinh.com/?p=1320).
    3. [Bloom filter](http://www.giaithuatlaptrinh.com/?p=2681).
    4. [Locality sensitive hashing](http://www.giaithuatlaptrinh.com/?p=2776).

---

## Phương pháp first-order
    1. Giới thiệu về [tối ưu lồi](http://www.giaithuatlaptrinh.com/?p=2837).
    2. Phân tích [tính hội tụ](http://www.giaithuatlaptrinh.com/?p=2889) của GD.

---

## Special Topics
    1. Tính chất Monge và thuật toán SMAWK
    2. Thuật toán Sweep Line
    3. Các kĩ thuật [xử lí bít](http://www.giaithuatlaptrinh.com/?p=515)
    4. Tính [tổng, tích và bán tổng](http://www.giaithuatlaptrinh.com/?p=1117).

---

## Cấu trúc dữ liệu
    1. [Danh sách liên kết](http://www.giaithuatlaptrinh.com/?p=1326) đơn và các biến thể.
    2. Tổng quan về [cây nhị phân](http://www.giaithuatlaptrinh.com/?p=1954) cân bằng.
    3. Cây AVL: [bài 1](http://www.giaithuatlaptrinh.com/?p=2054), [bài 2](http://www.giaithuatlaptrinh.com/?p=2125).
    4. [Heap nhị phân](http://www.giaithuatlaptrinh.com/?p=736) và thuật toán Heapsort.
    5. [Cây Splay Tree](http://www.giaithuatlaptrinh.com/?p=613).
    6. Cấu trúc [Union-Find](http://www.giaithuatlaptrinh.com/?p=218)
    7. Cấu trúc [mảng tự mở rộng](http://www.giaithuatlaptrinh.com/?p=1883)
    8. Cây tìm kiếm ưu tiên - [Priority Search Tree](http://www.giaithuatlaptrinh.com/?p=643)

---

## NP-completeness**
    1. [P vs NP](http://www.giaithuatlaptrinh.com/?p=1719).
    2. [NP-complete](http://www.giaithuatlaptrinh.com/?p=1763).
    3. [NP-complete](http://www.giaithuatlaptrinh.com/?p=1791) trên đồ thị.
    4. Các bài toán Weakly [NP-complete](http://www.giaithuatlaptrinh.com/?p=1826).

---

## Appendix
    1. Khái niệm [tiệm cận](http://www.giaithuatlaptrinh.com/?p=27)
    2. [Phân tích thuật toán](http://www.giaithuatlaptrinh.com/?p=2272).
    3. Giải [công thức truy hồi](http://www.giaithuatlaptrinh.com/?p=22).
    4. Phương pháp [tính tổng và tích.](http://www.giaithuatlaptrinh.com/?p=927)