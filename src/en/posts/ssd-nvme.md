---
title: 'SSD / NVMe Comparison'
date: 2024-02-08
seo:
  tag: 'reference'
  description: 'This page was originally published on July 28, 2023 to aid in selecting SSD, NVMe drives to take advantage of an current Micro Center sale.'
---

The main goal for this post was to aid in selecting SSD, and NVMe drives during a Micro Center sale.

## Storage Technologies

### 3D NAND

- The most basic of modern SSD technologies. Great for throwing on cheap systems, home servers, anything non-critical really.
- It is not recommended to host your Operating System on 3D NAND, or QLC.

### Quad Level Cell (QLC)

- QLC (Quad Level Cell) is cheaper to manufacture than TLC (Triple Level Cell).
- QLC is much slower and less durable to constant writing than TLC.
- It is not recommended to host your Operating System on 3D NAND, or QLC.

### Triple Level Cell (TLC)

- TLC is more reliable when compared to QLC.
- MLC is a Triple Level Cell based Samsung technology.

### Multi Level Cell (MLC)

- MLC is a Triple Level Cell based Samsung technology.

Let's break it down:

1. MLC V-NAND (Best)
2. V-NAND (TLC Equiv.)
3. TLC (V-NAND Equiv.)
4. QLC (Cheap, less reliable)
5. 3D NAND (Basic)

## How Are SSDs Scored

### Storage

- 1 point per GB
  - Less accurate the bigger the SSD
  - 3 TB and higher drives scale exp/log instead of linearly.

### Price

Based on price per $1.
Selected $0.10 as the baseline after averaging some calculations.

- 1 point for every $0.01 / GB below $0.10

### Technology Coefficient

- 3D NAND Coefficient = 0.5 (Big Penalty)
- QLC Coefficient = 0.75 (Small Penalty)
- TLC Coefficient = 1.0 (No Change)
- MLC V-NAND coefficient = 1.25 (Small Advantage)

## NVMe M.2 2280 M Key

| Brand        | Storage | Price | Notes   |
| ------------ | :-----: | :---: | ------- |
| 970 EVO Plus | 500 GB  |  $35  | MLC     |
| 970 EVO Plus |  2 TB   | $100  | MLC     |
| 970 EVO Plus |  1 TB   |  $50  | V-NAND  |
| 980          |  1 TB   |  $50  | MLC     |
| 980 Pro      |  2 TB   | $120  | MLC     |
| 980 Pro      |  1 TB   |  $70  | V-NAND  |
| 990 PRO      |  1 TB   |  $80  | MLC     |
| Crucial P3   |  1 TB   |  $40  | 3D NAND |
| Inland       | 500 GB  |  $23  | QLC     |
| Inland       |  1 TB   |  $40  | QLC     |
| Inland       |  2 TB   |  $70  | QLC     |
| Performance  |  1 TB   |  $55  | TLC     |
| Prime        | 500 GB  |  $30  | TLC     |
| Prime        |  1 TB   |  $50  | TLC     |

## SSD

| Brand        | Storage | Price | Notes   |
| ------------ | :-----: | :---: | ------- |
| Inland       |  1 TB   |  $50  | TLC     |
| Inland       | 512 GB  |  $25  | TLC     |
| Platinum     |  2 TB   |  $80  | TLC     |
| Platinum     |  1 TB   |  $43  | TLC     |
| Professional | 256 GB  |  $20  | 3D NAND |
| Professional | 125 GB  |  $15  | TLC     |
| 870 EVO      |  1 TB   |  $50  | MLC     |
| 870 EVO      |  4 TB   | $220  | MLC     |
| 870 EVO      | 500 GB  |  $40  | MLC     |
| 870 QVO      |  1 TB   |  $70  | QLC     |

## Final Results

### NVMe Scores

| Description      | $ / GB | Score |
| ---------------- | :----: | :---: |
| 970 500 GB       | 0.070  |  629  |
| 970 2 TB         | 0.050  | 2506  |
| 970 1 TB         | 0.103  | 1250  |
| 980 1 TB         | 0.050  | 1005  |
| 980P 2 TB        | 0.060  | 2505  |
| 980P 1 TB        | 0.070  | 1003  |
| 990P 1 TB        | 0.080  | 1253  |
| Crucial 1 TB     | 0.040  |  503  |
| Inland 500 GB    | 0.046  |  379  |
| Inland 1 TB      | 0.040  |  755  |
| Inland 2 TB      | 0.035  | 1505  |
| Performance 1 TB | 0.055  | 1005  |
| Prime 500 GB     | 0.060  |  504  |
| Prime 1 TB       | 0.050  | 1005  |

\*_Higher is better._

### SSD Scores

| Description               | $ / GB | Score |
| ------------------------- | :----: | :---: |
| Inland 1TB $50 TLC        | 0.050  | 1005  |
| Inland 512GB $25 TLC      | 0.049  |  517  |
| Platinum 2TB $80 TLC      | 0.040  | 2006  |
| Platinum 1TB $43 TLC      | 0.043  | 1006  |
| Professional 256GB $20 3D | 0.078  |  129  |
| Professional 125GB $15 3D | 0.120  |  63   |
| 870 EVO 1TB $50 MLC       | 0.050  | 1256  |
| 870 EVO 4TB $220 MLC      | 0.055  | 5006  |
| 870 EVO 500GB $40 MLC     | 0.020  |  635  |
| 870 QVO 1TB $70 QLC       | 0.070  |  753  |

\*_Higher is better._

## Conclusions

- Cheap system? Get **any** of these.
- Secondary drive? Get any **QLC** or better.
- OS Drive? Get any **TLC** or better.
- Extra cash? Premium for reliability? Get any **Samsung** from the list.
