//**********VPC-Module**********//



vpc_cidr_block = "172.20.0.0/16"

subnet_cidr_blocks = [
  "172.20.0.0/20",
  "172.20.16.0/20",
  "172.20.32.0/20",
]

availability_zones = [
  "us-east-2a",
  "us-east-2b",
  "us-east-2c",
]

environment = "prod"
project = "portali"

# //**********EC2-Module**********//


# ami = "ami-026c3177c9bd54288"
# instance_type = "t2.micro"

# //**********RDS-Module**********//

# allocated_storage = 20
# storage_type = "gp2"
# engine = "PostgreSQL"
# engine_version = "15.5"
# instance_class = "db.t3.micro"
# db_name = "portaliprod"
# db_username = "portaliprod"
# db_password = "Portali!1523#!"
# multi_az = false
# publicly_accessible = true
# backup_retention_period = 7
# skip_final_snapshot = true
# db_instance_name = "portaliprod"
# db_port = "5432"
# db_cidr = [0.0.0.0/0]

//******************** s3 ********************//

# region = "us-east-2"
# bucket_name = "portali-test-bucket-name"
# enable_versioning = false
# mfa_delete = false
# destination_logging_bucket = "portali-test-bucket-name"
# logging_prefix = "logs/"

# //********************  ECR  ********************//

# region = "us-east-2"
# repositories = [
#   {
#     name                 = "convertio_convert_service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "convertio_ocr_service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "frontend"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-dashboard-core-layer"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-dashboard-frontend"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-dashboard-identity-service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-dashboard-notification-service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-dashboard-storage-service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-flask-okba"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-nginx"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-web-service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "portaliprod-workspace-service"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   },
#   {
#     name                 = "queue_orchestrator"
#     image_tag_mutability = "MUTABLE"
#     scan_on_push         = false
#     tags                 = {}
#     encryption_type      = "AES256"
#     kms_key              = "null"
#   }
# ]

//********************  sg  ********************//

name = "nabeel-security-group"
  ingress_rules = [
    {
      from_port   = 80,
      to_port     = 80,
      protocol    = "tcp",
      cidr_blocks = ["0.0.0.0/0"],
    }, 
  ]
  egress_rules = [
        {
          from_port   = 443,
          to_port     = 443,
          protocol    = "tcp",
          cidr_blocks = ["0.0.0.0/0"],
        },
      ]