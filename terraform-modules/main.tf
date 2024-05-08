provider "aws" {
  region = "us-east-2"
}

//**********VPC-Module**********//


module "vpc" {
  source = "./modules/vpc"

  vpc_cidr_block     = var.vpc_cidr_block
  subnet_cidr_blocks = var.subnet_cidr_blocks
  availability_zones = var.availability_zones
  environment        = var.environment
  project            = var.project

}


# //**********EC2-Module**********//


# module "ec2" {
#   source = "./modules/ec2"

#   ami           = var.ami
#   instance_type = var.instance_type
#   subnet_id     = module.vpc.subnet1
#   aws_region    = var.aws_region
#   environment   = var.environment
#   project       = var.project

# }


//**********RDS-Module**********//

# module "rds" {
#   source = "./modules/rds"
#   db_instance_name     = var.db_instance_name
#   allocated_storage    = var.allocated_storage
#   storage_type         = var.storage_type
#   engine               = var.engine
#   engine_version       = var.engine_version
#   instance_class       = var.instance_class
#   db_name              = var.db_name
#   db_username             = var.db_username
#   db_password             = var.db_password
#   aws_region           = var.aws_region
#    db_subnet_group_name = module.db-sg.db_subnet_group
# #   subnet_group = module.db-sg.db_subnet_group
# #   subnet_group_name = module.db-sg.db_subnet_group_name
#   multi_az             = var.multi_az
#   publicly_accessible  = var.publicly_accessible
#   backup_retention_period = var.backup_retention_period
#   skip_final_snapshot = var.skip_final_snapshot
#   vpc_security_group_ids = module.db-sg.rds_security_group_id
#   environment        = var.environment
#   project            = var.project
# }  

# //********************  db-sg  ********************//

module "sg" {
  source        = "./modules/sg"  # Reference to the security group module
  name          = var.name
  vpc_id        = module.vpc.vpc_id
  ingress_rules = var.ingress_rules
  egress_rules  = var.egress_rules
}



# //********************  s3  ********************//

#  module "s3" {

#    source = "./modules/s3"
#    region = var.region
#    bucket_name = var.bucket_name
#    enable_versioning = var.enable_versioning
#    mfa_delete = var.mfa_delete
#    destination_logging_bucket = var.destination_logging_bucket
#    logging_prefix = var.logging_prefix
# }

//******************** ECR ********************//

# module "ecr" {

#   source = "./modules/ecr"
#   repositories = var.repositories
#   region = var.region
# }
