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

# variable "sse_algorithm" {
#   description = "Encryption type (e.g., SSE-S3)"
#   type        = string
# }

# # variable "destination_logging_bucket" {
# #   description = "Destination bucket for server access logging"
# #   type        = string
# #   default     = ""
# # }

# # variable "logging_prefix" {
# #   description = "Prefix for server access logs"
# #   type        = string
# #   default     = "logs/"
# # }

# variable "acl" {
#     type = string
# }

# # variable "logging_bucket" {
# #   description = "The S3 bucket where logs should be stored"
# #   type        = string
# #   default     = ""
# # }

# variable "server_access_logging" {
#   description = "Enable server access logging"
#   type        = bool
#   default     = true
# }



# variable "tags" {
#   description = "Tags for the S3 bucket"
#   type        = map(string)
#   default     = {}
# }
