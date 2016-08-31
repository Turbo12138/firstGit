        <div class="col-sm-10 form-on">
			<h3>企业信息管理</h3>
            <form method="post" action="">
            	<p class="f-cb">
					<span>公司名称：</span>
					<input  class="input required" id="username"  type="text" name="companyName" placeholder="汇嘉网络科技" value="<?php echo isset($data["companyName"]) ? $data["companyName"] : ''; ?>" />
					<span class="size">请输入您公司的名称</span>
				</p>
                <p class="f-cb">
					<span>公司主页地址：</span>
					<input class="input required" type="text" name="companyUrl" placeholder="www.baidu.com" value="<?php echo isset($data["companyName"]) ? $data["companyName"] : ''; ?>"/>
					<span class="size">请输入您公司的网址</span>
				</p>
                <p class="f-cb">
					<span>企业类型：</span>
                	<select class="select" id="pid" name="companyType">
                        <option value="0">请选择</option>
                        <option value="1">国企</option>
                        <option value="2">私企</option>
                	</select>
                </p>
                <p class="f-cb">
					<span>公司地址：</span>
					<input class="input" type="text" name="companyAddress" placeholder="勒泰中心A座1616" value="<?php echo isset($data["companyAddress"]) ? $data["companyAddress"] : ''; ?>" />
					<span class="size">请输入您公司的地址</span>
				</p>
                <p class="f-cb one">
					<span>公司简介：</span>
                   <textarea class="details" placeholder="(在这里输入您的留言……)" name="companyDescription"><?php echo isset($data["companyDescription"]) ? $data["companyDescription"] : ''; ?></textarea>
                </p>
                <p class="f-cb">
					<span>公司福利：</span>
                	<textarea class="details-1" placeholder="(用英文逗号隔开。)" name="companyAdvantage"><?php echo isset($data["companyAdvantage"]) ? $data["companyAdvantage"] : ''; ?></textarea>
                </p>
                <p class="te">
					<input type="hidden" name="submit" value="1" />
                	<input type="button"  class="btn btn-primary margin submit_info" value="保存" />
            	</p>
            </form>
        </div>
