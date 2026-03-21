# MetaBee 网站 Synology NAS 部署指南

## 当前状态

- ✅ Next.js 已配置 `output: "export"` 静态导出
- ✅ 构建完成，静态文件位于 `out/` 目录
- ✅ Synology NAS 已登录，Web Station 正常

## 部署步骤

### 1. 上传网站文件到 NAS

**方式 A：File Station + ZIP（推荐，一次上传）**

1. 在 DSM 中打开 **File Station**
2. 进入 `web` 共享文件夹（若不存在，需先在 **控制台 > 共享文件夹** 创建）
3. 在 `web` 下新建文件夹 `metabee`
4. 将本地 `metabee-site/metabee-site.zip`（约 51MB）上传到 `web/metabee/`
5. 右键该 zip → **解压缩** → 解压到当前目录，得到 `index.html`、`_next/`、`assets/` 等
6. 若解压后文件在 `metabee/` 子目录内，请移到 `web/metabee/` 根目录

**方式 B：File Station 直接上传**

将 `metabee-site/out/` 目录下的**所有内容**（不是 out 文件夹本身）拖拽上传到 `web/metabee/`

**方式 C：rsync / SCP（需开启 SSH）**

```bash
# 若 NAS 已开启 SSH，可用 rsync 上传
rsync -avz --progress /Users/solarcell1474/metabee\ website/metabee-site/out/ \
  AaronNg@<NAS_IP>:/volume1/web/metabee/
```

### 2. 配置 Web Station 虚拟主机

1. 打开 **Web Station**
2. 点击左侧 **網頁入口**（Web Portal）
3. 点击 **新增** 创建虚拟主机
4. 配置：
   - **主機名稱**：`www.metabee.com.hk`
   - **連接埠**：80（HTTP）或 443（HTTPS）
   - **文件根目錄**：`/web/metabee`（Synology 使用此路徑，勿用 `/volume1/web/metabee`）
   - **HTTP 後端伺服器**：Nginx 或 Apache

### 3. 配置外部访问与 DNS

1. **控制台 > 外部存取 > DDNS**
   - 若使用 Synology DDNS，记下域名（如 `xxx.synology.me`）
   - 或记下 NAS 公网 IP

2. **HKDNR 域名管理**
   - 登录 HKDNR，管理 `metabee.com.hk`
   - 添加 A 记录：`www` → NAS 公网 IP
   - 或 CNAME：`www` → `xxx.synology.me`（若用 Synology DDNS）

### 4. 配置 SSL（可选）

1. **控制台 > 安全性 > 憑證**
2. 新增 > Let's Encrypt
3. 域名填 `www.metabee.com.hk`，完成验证

### 5. 验证

- 本地测试：`http://<NAS_IP>/` 或 `http://<NAS_IP>:端口/`
- 域名测试：`https://www.metabee.com.hk`（DNS 生效后）

---

**本地构建命令**（已执行）：

```bash
cd metabee-site && npm run build
```

输出目录：`metabee-site/out/`
