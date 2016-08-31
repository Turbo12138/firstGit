        <div class="col-sm-10 form-on">
			<h3>企业信息管理</h3>
            <form method="post" action="">
            	<p class="f-cb">
					<span>公司名称：</span>
					<input  class="input required" id="username"  type="text" name="companyName" placeholder="汇嘉网络科技" />
					<span class="size">请输入您公司的名称</span>
				</p>
                <p class="f-cb">
					<span>公司主页地址：</span>
					<input class="input required" type="text" name="companyUrl" placeholder="www.baidu.com"/>
					<span class="size">请输入您公司的网址</span>
				</p>
                <p class="f-cb">
					<span>企业类型：</span>
                	<select class="select" id="pid">
                        <option>请选择</option>
                        <option>国企</option>
                        <option>私企</option>
                	</select>
                </p>
                <p class="f-cb">
					<span>公司地址：</span>
					<input class="input" type="text" name="companyAddress" placeholder="勒泰中心A座1616" value="" />
					<span class="size">请输入您公司的地址</span>
				</p>
                <p class="f-cb one">
					<span>公司简介：</span>
                   <textarea class="details" placeholder="(在这里输入您的留言……)" name="companyDescription"></textarea>
                </p>
                <p class="f-cb">
					<span>公司福利：</span>
                	<textarea class="details-1" placeholder="(用英文逗号隔开。)" name="companyAdvantage"></textarea>
                </p>
                <p class="te">
                	<input type="submit"  class="btn btn-primary margin" value="保存" />
                	<input type="submit" class="btn btn-default" value="重置" />
            	</p>
            </form>
        </div>
