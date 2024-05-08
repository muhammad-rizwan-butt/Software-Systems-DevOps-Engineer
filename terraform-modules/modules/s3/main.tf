# provider "aws" {
#   region = var.region
# }

# resource "aws_s3_bucket" "bucket" {
#   bucket = var.bucket_name

#   # Enable versioning based on configuration
#   versioning {
#     enabled = var.enable_versioning
#     mfa_delete = var.mfa_delete
#   }

#   #Server access logging
#   logging {
#     target_bucket = var.destination_logging_bucket
#     target_prefix = var.logging_prefix
#   }


# }


#   # Server access logging
# #   logging {
# #     target_bucket = var.destination_logging_bucket
# #     target_prefix = var.logging_prefix
# #   }

# resource "aws_s3_bucket_server_side_encryption_configuration" "encryption" {
#   bucket = aws_s3_bucket.bucket.id
#   rule {
#     apply_server_side_encryption_by_default {
#       sse_algorithm = var.sse_algorithm
#     }
#   }
# }


#   # Enable server-side encryption
#   server_side_encryption_configuration {
#     rule {
#       apply_server_side_encryption_by_default {
#         sse_algorithm = var.encryption_type
#       }
#     }
#   }

#   # Server access logging
# #   logging {
# #     target_bucket = var.destination_logging_bucket
# #     target_prefix = var.logging_prefix
# #   }

# #   # Add optional tags
# #   tags = var.tags
# }

# resource "aws_s3_bucket_acl" "acl" {
#   bucket = aws_s3_bucket.bucket.id
#   acl    = var.acl
# }

# # resource "aws_s3_bucket_logging" "logging" {
# #   bucket = aws_s3_bucket.bucket.id
# #   target_bucket = var.destination_logging_bucket
# #   target_prefix = var.logging_prefix
# # }

