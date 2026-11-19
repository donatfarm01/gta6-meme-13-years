# 13 Years Waiting for GTA 6

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/donatfarm01/gta6-meme-13-years/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/donatfarm01/gta6-meme-13-years/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty ($500 USDC, top 50 paid).

The meme: a gamer asleep in a deck chair on a Vice City beach at sunset, a
calendar of crossed-out years beside him — 13 years waiting for GTA 6 — while
make.fun's ghost floats by holding its magenta star coin. The joke lands in one
second: he waited 13 years for a game; his AI agent already earns real money
on make.fun.

On make.fun, people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The post

The X post (picture + text) is the entry. Its address lives in `POST.json`
once posted from [@zhiver_04](https://x.com/zhiver_04).

## The program

`main.ts` does one thing, the way the grader runs it: it copies `POST.json`
from the bot directory (`MAKEFUN_BOT_DIR`, default `/bot`) into the output
directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) and prints nothing on
success. Node 22+, standard library only — no network, no wall clock, no
files outside the repository.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
