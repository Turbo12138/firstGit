        <div class="col-sm-10 form-on">
			<h3><?php echo $title; ?></h3>
            <div class="col-sm-12">
                <a class="btn btn-primary ng-binding" href="<?php echo base_url('index.php/company/post'); ?>"><span class="glyphicon glyphicon-plus"></span>添加新职位</a>
                <h4>职位列表</h4>
                <table  class="table table-bordered table-striped table-hover">
                    <colgroup>
                        <col class="col-xs-4">
                        <col class="col-xs-2">
                        <col class="col-xs-2">
                        <col class="col-xs-1">
                        <col class="col-xs-2">
                    </colgroup>
                    <thead>
                        <tr>
                            <th class="text-center">职位名称</th>
                            <th class="text-center">发布时间</th>
                            <th class="text-center">到期时间</th>
                            <th class="text-center">简历量</th>
                            <th class="text-center">管理</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
						<?php if(count($data)): ?>
						<?php foreach($data as $d): ?>
                        <tr>
                            <td><a href="#"><?php echo $d["jobName"]; ?></a></td>
                            <td><a href="#"><?php echo date('Y年m月d日', $d["updateDate"]); ?></a></td>
                            <td><a href="#"><?php echo date('Y年m月d日', ($d["updateDate"]+(60 * 60 * 24 *7))); ?></a></td>
                            <td><a href="#">0</a></td>
                            <td>
								<a href="<?php echo base_url('index.php/company/job_edit?id='.$d["id"]); ?>">修改</a>
								<a href="javascript:;" class="refresh" action="<?php echo base_url('index.php/company/job_refresh?id='.$d["id"]); ?>">刷新</a>
								<a href="javascript:;" class="pause" action="<?php echo base_url('index.php/company/job_pause?id='.$d["id"]); ?>">暂停</a>
								<a href="javascript:;" class="del" action="<?php echo base_url('index.php/company/job_del?id='.$d["id"]); ?>">删除</a>
							</td>
                        </tr>
						<?php endforeach; ?>
						<?php else: ?>
						<tr>
							<td>暂无数据</td>
							<td></td>
                            <td></td>
                            <td></td>
                            <td></td>
						</tr>
						<?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>