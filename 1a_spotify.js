#!name=Spotify(>=iOS15)
#!desc=2023.10.04 部分解锁premium,音质不能设置为超高(建议登录后再打开脚本,重启app等待脚本生效)
# 仓库地址 https://github.com/app2smile/rules
# 功能: 1.去除播放广告 2.歌手/专辑列表正常展示 3.去除随机播放

[MITM]
hostname = %APPEND% spclient.wg.spotify.com

[Script]
spotify-json = type=http-request,pattern=^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/,requires-body=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
spotify-proto = type=http-response,pattern=^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js,script-update-interval=0
