package models

type Namespace struct {
	Name     string             `json:"name"  validate:"required,hostname_rfc1123"`
	Owner    string             `json:"owner"`
	TenantID string             `json:"tenant_id" bson:"tenant_id,omitempty"`
	Members  interface{}        `json:"members" bson:"members"`
	Settings *NamespaceSettings `json:"settings"`
	Devices  int                `json:"devices" bson:",omitempty"`
	Sessions int                `json:"sessions" bson:",omitempty"`
	Token    interface{}        `json:"token"`
}

type NamespaceSettings struct {
	SessionRecord bool `json:"session_record" bson:"session_record,omitempty"`
}

type Member struct {
	ID   string `json:"id" bson:"id"`
	Name string `json:"name,omitempty" bson:"-"`
}

type Token struct {
	TenantID string `json:"tenant_id" bson:"tenant_id"`
	ReadOnly bool   `json:"read_only" bson:"read_only"`
}
