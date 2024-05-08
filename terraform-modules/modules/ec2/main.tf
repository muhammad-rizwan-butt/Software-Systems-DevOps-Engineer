# provider "aws" {
#     region = var.aws_region
# }


# resource "aws_instance" "test" {
#   ami           = var.ami
#   instance_type = var.instance_type
#   subnet_id = var.subnet_id
#   tags = {
#     Name = "${var.project}${var.environment}-EC2"
#   }
# }