第三幕计分与重试版
保留原过渡、视频、UI、选项和反馈。
答错：0分，Try again 回到当前选项，清空选中状态。
答对：10分，Exit safely 请求跳转；只有Storyline中EmailScore和DoorScore均为10时，DoorDone才变True。每题覆盖得分，不重复累计。

Storyline变量：保留EmailScore；新增DoorScore Number=0、TotalScore Number=0、DoorDone True/False=False。
第三幕触发器顺序：
1. Timeline starts: DoorDone=False。
2. Timeline starts: DoorScore=0。
3. Timeline starts: TotalScore=0。
4. Timeline starts: Execute JavaScript，粘贴storyline-door-listener.js全部代码。
5. When DoorDone changes: If DoorDone=True，跳到最后Quiz入口/Quiz第一页（明确指定目标页）。
替换第三幕Web Object；发布Review 360测试。
第一次单独从第三幕开始测时EmailScore为0，Exit safely不会跳页，这是20分门槛的预期行为。应从第二幕开始答对两题进行测试。
可在Storyline页上临时加文本：Email %EmailScore% / Door %DoorScore% / Total %TotalScore%，用于检查变量；正式版可移除。
导航菜单/Next仍需单独限制，防止绕过练习。最终Quiz尚未制作；先建一张空白目标页供跳转测试。课程重新开始时需要统一清零全部变量。
HTML独立预览可以测试选择与反馈，但跳转和20分校验由Storyline完成。
