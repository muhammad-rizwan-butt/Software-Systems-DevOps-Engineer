# provider "aws" {
#   region = var.region
# }

# # Create multiple ECR repositories
# resource "aws_ecr_repository" "repositories" {
#   for_each = { for repo in var.repositories : repo.name => repo }

#   name                 = each.value.name
#   image_tag_mutability = each.value.image_tag_mutability
#   tags                 = each.value.tags

#   image_scanning_configuration {
#     scan_on_push = each.value.scan_on_push
#   }

#   encryption_configuration {
#     encryption_type = each.value.encryption_type
#     kms_key         = each.value.encryption_type == "KMS" && each.value.kms_key != null ? each.value.kms_key : null
#   }
# }
