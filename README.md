# Maximilian Craig

# About Me

👋 I'm Max, a Software Engineer based in Melbourne. I currently work as a Core software engineer at ANZ, working with API, Kuberenetes Operators, and internal developer tooling.

<img src="/image/README/Selfie.JPEG" alt="This is me" width="50%">

While you're stopping by, feel free to check out my [blog](/c/blog/readme/).

[Contact Me](/c/contactme/) · [Resume](/docs/Maximilian_Craig_Resume.pdf)

---

# Employment History

```mermaid
gantt
    dateFormat YYYY-MM
    axisFormat %Y

    section Academia
    Monash University        :2023-03, 2025-02

    section Engineering
    ANZ Bank                  :2024-01, 2026-02
    Macquarie Group           :2026-03, 2026-07
    ANZ Bank                  :2026-08, 2027-01
```

## Software Engineer

<p class="job-subtitle">ANZ Bank · Melbourne, Australia · September 2026 – Present</p>

Working within the Core Platform team, developing and supporting tooling for ANZ's digital channel.
* Performed Terraform state migration of over 22,000 GCP resources, cutting CI/CD time by over 80%.
* Developed and deployed a custom agentic workflow testing framework written entirely in Golang as a drop in replacement to [Promptfoo](https://github.com/promptfoo/promptfoo), removing 900 package dependencies and CVE exposure.

## Software Engineer

<p class="job-subtitle">Macquarie Group · Sydney, Australia · Mar 2026 – September 2026</p>

Working within the Software Development Lifecycle Team developing automated processes for provisioning GitHub Repositories and GitHub Advanced Security.
* Designed, Developed and Deployed an API for generating short lived installation tokens for Github CI/CD Integration.
* Designed and Implemented the migration of over 4,000 Bamboo plans to support the move to Github Enterprise Cloud.
* Supported Github Enterprise migration from Bitbucket, which oversaw the migration of over 20,000 source code repositories.

## Platform Engineer

<p class="job-subtitle">ANZ Bank · Melbourne, Australia · Jan 2024 – Jan 2026</p>

* Developed Kubernetes operators for automatic provisioning and lifecycle management of cloud infrastructure.
* Built and maintained CI/CD pipelines for deploying cloud-native applications.
* Investigated and implemented multi-region architectures to meet financial risk and resiliency requirements.
* Designed and executed automated migrations across 20,000+ configuration files.

## Teaching Associate

<p class="job-subtitle">Monash University · Melbourne, Australia · Mar 2023 – Feb 2025</p>

* Taught FIT1045: Introduction to Programming and FIT1008: Introduction to Computer Science.
* Led weekly workshops, supporting and teaching course material to 200+ students.
* Ran weekly consultations and oversaw the invigilation and marking of assessments.
* Achieved 95% student satisfaction.

---

# Talks

## Golang Sydney Meetup
[Meetup link](https://www.meetup.com/golang-syd/)

Completed one of my first public talks at the Golang Sydney Meetup on the 17th September 2026. Within this talk I discussed what is new in Go 1.26, and why as a developer it is important to actively investigate and seek out improvements to your programming language.

My talk slides are available [here](https://maxcraig.me/c/blog/whats-new-in-go-1.27/)!

![alt text](/image/README/Golang-Sydney-Talk-September-2026.png)

# Projects

## [Burrow](https://github.com/maxcraig112/burrow)

An encrypted, self-hosted peer-to-peer file transfer tool inspired by [magic-wormhole](https://github.com/magic-wormhole/magic-wormhole).

![177970757241](/image/README/demo.gif)

## [Giffy](https://github.com/maxcraig112/GoGiffy)

A multipurpose Discord bot designed to allow the manipulation, tagging, archiving and retrieval of gifs

![Jif Gif Season](https://c.tenor.com/oylHwLtwhbsAAAAC/gif-jif.gif)

## [Learning Vietnamese Numbers](https://vietnamese-numbers.maxcraig112.workers.dev/)

A website to help you practice saying and reading Vietnamese numbers from 1-1,000

![1779707157241](/image/README/LearningVietnamese.png)

## [Esoteric Puzzles](https://github.com/maxcraig112/Esoteric-Puzzles/blob/main/README.md)

> **Esoteric Puzzle**
> 
> A puzzle that is unique, unusual, or deliberately hard to understand, often requiring niche knowledge, unconventional thinking, or hidden rules to solve.

## [Anki Heisig Card Generator](https://github.com/maxcraig112/Anki-Heisig-Card-Generator)

A Program for automatically generating Anki flashcards relating to Kanji from `Remembering the Kanji` by James Heisig.

---

# Hobbies

## Hiking

I love to hike when I get the chance! Noteable hikes I've done include

### Koyasan Choishi-Michi Pilgrimage

A 24 km trail that connects the town of Kudoyama to Koyasan, the founding place of the largest branch of Buddhism, and home to Okunoin Cemetery, the largest in Japan.

<img src="/image/README/ChoishiMichi.png" alt="Choishi Michi" width="70%">

### Summit of Cradle Mountain and Circuit of Dove Lake

A mountain located within the Central Highlands of Tasmania, including a 12km loop with a summit 1,545m above sea level.

<img src="/image/README/CradleMountain.png" alt="CradleMountain" width="70%">

### The Great North Walk

The Great North Walk is a 260km track that stretches from Sydney to Newcastle. I've completed parts of this trail and highly reccomend it!

<img src="/image/README/GreatNorthWalk.png" alt="CradleMountain" width="70%">

## Self-Hosting

I currently run a Home Server where I self-host applications, games, and run tests.

* [Proxmox](https://www.proxmox.com/en/) is used to manage the deployment of VMs and Containers
* [Tailscale](https://tailscale.com/) is used to remotely access my VMs

I'm currently self-hosting

1. A [Jellyfin](https://github.com/jellyfin/jellyfin) home media server
2. A self hosted OneDrive using [OpenMediaVault](https://www.openmediavault.org/)
3. Minecraft servers via [MineOS](https://mineos.net/)
4. Network Wide Ad Blocking via [Pi-hole](https://pi-hole.net/)

### Specs

| Component | Details |
| --------- | ------- |
| CPU | AMD Ryzen 5 5600X 6-Core (12 Threads) |
| RAM | 32 GB DDR4 |
| GPU | NVIDIA GeForce GTX 1060 |
| Storage | 2x 4TB Seagate IronWolf HDD, 500GB Samsung 970 EVO M.2 NVMe |
| Hypervisor | Proxmox VE 8.3.0 |
| Kernel | Linux 6.8.12-4-pve |
