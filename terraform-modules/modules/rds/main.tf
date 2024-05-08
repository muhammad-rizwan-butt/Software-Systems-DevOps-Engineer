# resource "aws_db_instance" "rds_instance" {
#   identifier               = var.db_name
#   allocated_storage        = var.allocated_storage
#   storage_type             = var.storage_type
#   engine                   = var.engine
#   engine_version           = var.engine_version
#   instance_class           = var.instance_class
#   db_name                  = var.db_name
#   username                 = var.db_username
#   password                 = var.db_password
#   vpc_security_group_ids   = var.vpc_security_group_ids
#   multi_az                 = var.multi_az
#   publicly_accessible      = var.publicly_accessible
#   backup_retention_period  = var.backup_retention_period
#   skip_final_snapshot      = var.skip_final_snapshot
#   db_subnet_group_name     = var.subnet_group
#   tags = {
#     Name = "${var.project}${var.environment}-rds"
#   }
# }



