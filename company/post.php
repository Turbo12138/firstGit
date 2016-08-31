        <div class="col-sm-10 form-on">
        	<h3>发布职位</h3>
            <form action="" method="post" id ="myform">
            	<p class="f-cb">
                	<span>职业名称：</span>
                    <input id = "name" class="input" type="text" name="jobName" value="" />
                    <span class="size">请输入您职位的名称</span>
                </p>
                <p class="f-cb one">
                	<span>岗位描述：</span>
                    <textarea  id="age" class="details" placeholder="(在这里输入您的岗位信息……)" name="jobDescription"></textarea>
                </p>
                <p class="f-cb">
                	<span>薪资范围：</span>
                    <input  id="sex_man" class="input height" type="text" name="jobSalaryLess"  /><i>&nbsp;~&nbsp;</i><input class="input height" type="text" name="jobSalaryMost" />
                    <span>&nbsp;元</span>
                </p>
                <p class="f-cb">
                	<span>招聘数量：</span>
                    <input id="man" class="input height" type="text" name="jobAmount"  />
                    <span>&nbsp;人</span>
                </p>
                <p class="f-cb">
                	<span>学历要求：</span>
                	<select class="select" id = "add" name="jobEducation">
						<option value="0">不限</option>
						<option value="1">小学</option>
                        <option value="2">初中</option>
                        <option value="3">高中</option>
                        <option value="4">中专</option>
                        <option value="5">大专</option>
                        <option value="6">本科</option>
                        <option value="7">研究生</option>
                        <option value="8">博士</option>
                	</select>
                </p>
                <p class="f-cb">
                	<span>经验要求：</span>
                    <input class="input height" type="text" name="jobExperience"  />
                    <span>&nbsp;年</span>
                </p>
                <p class="f-cb">
                	<span>技能选择：</span>
                    <span>
                    	<a href="javascript:;" class="skill-add">设置技能</a>
                    </span>
                    <input type="hidden" name="jobSkill">
                </p>
                <p class="te">
					<input type="hidden" name="submit" value="1" />
                	<input type ="button" value="提交" class="btn btn-primary margin submit_post"  />
                	<input type="button" class="btn btn-default" value="重置" />
            	</p>
            </form>
        </div>
		<div class="skill-body">
			<div class="skill-top"><a href="#" class="skill-close">关闭</a></div>
			<div class="skill-container">
				<div class="skill-right"></div>
				<div class="skill-left"></div>
			</div>
		</div>