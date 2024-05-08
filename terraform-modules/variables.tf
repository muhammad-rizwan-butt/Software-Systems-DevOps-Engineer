//**********VPC-Module**********//


variable "vpc_cidr_block" {
  type = string
}
variable "subnet_cidr_blocks" {
  type = list(string)
}
variable "availability_zones" {
  type = list(string)
}

variable "environment" {
  type = string
}
variable "project" {
  type = string
}

# //**********EC2-Module**********//


# variable "ami" {
#   type = string
# }
# variable "instance_type" {
#   type = string
# }

# //**********RDS-Module**********//

# # variable "aws_region" {
# #   type = string
# # }

# variable "allocated_storage" {
#   type = number
# }

# variable "storage_type" {
#   type = string
# }

# variable "engine" {
#   type = string
# }

# variable "engine_version" {
#   type = string
# }

# variable "instance_class" {
#   type = string
# }

# variable "db_name" {
#   type = string
# }

# variable "db_username" {
#   type = string
# }

# variable "db_password" {
#   type = string
# }

# variable "db_subnet_group_name" {
#   type = string
# }

# variable "vpc_security_group_ids" {
#   type = list(string)
# }

# variable "multi_az" {
#   type = bool
# }

# variable "publicly_accessible" {
#   type = bool
# }

# variable "backup_retention_period" {
#   type = number
# }

# variable "skip_final_snapshot" {
#   type = bool
# }

# variable "db_instance_name" {
#   type = string
# }

# variable "db_port" {
#   type = number
# }

# variable "db_cidr" {
#   type = list(string)
# }
# variable "subnet_group" {
#   type = string
# }
# variable "subnet_group_name" {
#   type = string
# }

# //******************** s3 ********************//


# variable "region" {
#   description = "AWS region where the S3 bucket is created"
#   type        = string
# }

# variable "bucket_name" {
#   description = "The name of the S3 bucket"
#   type        = string
# }

# variable "enable_versioning" {
#   description = "Enable versioning"
#   type        = bool
# }

# variable "mfa_delete" {
#   description = "MFA delete for bucket versioning"
#   type        = bool
# }

# variable "destination_logging_bucket" {
#   description = "Name of the S3 bucket where logs will be stored."
#   type = string
# }

# variable "logging_prefix" {
#   description = "Prefix for log files in the logging target bucket."
#   type = string
# }

//********************  ECR  ********************//

# variable "repositories" {
#   description = "A list of repository configurations"
#   type = list(object({
#     name                 = string
#     image_tag_mutability = string
#     scan_on_push         = bool
#     encryption_type      = string
#     kms_key              = string
#     tags                 = map(string)
#   }))
# }

# variable "region" {
#   type = string
# }

//********************  sg  ********************//

# variable "region" {
#   type = string
# }

variable "name" {
  description = "Name of the security group"
  type        = string
}

# variable "vpc_id" {
#   description = "ID of the VPC where the security group will be created"
#   type        = string
# }

variable "ingress_rules" {
  description = "List of ingress rules"
  type        = list(object({
    from_port   = number,
    to_port     = number,
    protocol    = string,
    cidr_blocks = list(string),
  })) 
}

variable "egress_rules" {
  description = "List of egress rules"
  type        = list(object({
    from_port   = number,
    to_port     = number,
    protocol    = string,
    cidr_blocks = list(string),
  }))
  }


