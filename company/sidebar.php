    	<div class="col-sm-2 font-on">
        	<ul class="nav">
				<li class="<?php if($cur == 'posting') echo 'first'; ?>">
					<a href="<?php echo base_url('index.php/company/posting'); ?>"><span class="glyphicon glyphicon-indent-left"></span>发布中职位</a>
				</li>

                <li class="<?php if($cur == 'stoping') echo 'first'; ?>">
					<a href="<?php echo base_url('index.php/company/stoping'); ?>"><span class="glyphicon glyphicon-indent-right"></span>暂停中职位</a>
				</li>

                <li class="<?php if($cur == 'overdue') echo 'first'; ?>">
					<a href="<?php echo base_url('index.php/company/overdue'); ?>"><span class="glyphicon glyphicon-remove-circle"></span>过期的职位</a>
				</li>

				<!-- 
                <li class="<?php if($cur == 'resume') echo 'first'; ?>">
					<a href="<?php echo base_url('index.php/company/resume'); ?>"><span class="glyphicon glyphicon glyphicon-gift"></span>收到的简历</a>
				</li>
				 -->

				<li class="<?php if($cur == 'info') echo 'first'; ?>">
					<a href="<?php echo base_url('index.php/company/info'); ?>"><span class="glyphicon glyphicon-list-alt"></span>企业信息管理</a>
				</li>

                <li>
					<a href="javascript:;" action="<?php echo base_url('index.php/login/logout'); ?>" class="quit"><span class="glyphicon glyphicon-arrow-left"></span>退出</a>
				</li>
            </ul>
        </div>