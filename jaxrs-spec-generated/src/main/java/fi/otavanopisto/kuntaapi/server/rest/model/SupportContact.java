package fi.otavanopisto.kuntaapi.server.rest.model;

import java.util.ArrayList;
import java.util.List;



import io.swagger.annotations.*;
import java.util.Objects;


public class SupportContact   {
  
  private String email = null;
  private String phone = null;
  private String phoneChargeDescription = null;
  private String language = null;
  private List<String> serviceChargeTypes = new ArrayList<String>();

  /**
   **/
  public SupportContact email(String email) {
    this.email = email;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }

  /**
   **/
  public SupportContact phone(String phone) {
    this.phone = phone;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getPhone() {
    return phone;
  }
  public void setPhone(String phone) {
    this.phone = phone;
  }

  /**
   **/
  public SupportContact phoneChargeDescription(String phoneChargeDescription) {
    this.phoneChargeDescription = phoneChargeDescription;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getPhoneChargeDescription() {
    return phoneChargeDescription;
  }
  public void setPhoneChargeDescription(String phoneChargeDescription) {
    this.phoneChargeDescription = phoneChargeDescription;
  }

  /**
   **/
  public SupportContact language(String language) {
    this.language = language;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getLanguage() {
    return language;
  }
  public void setLanguage(String language) {
    this.language = language;
  }

  /**
   **/
  public SupportContact serviceChargeTypes(List<String> serviceChargeTypes) {
    this.serviceChargeTypes = serviceChargeTypes;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public List<String> getServiceChargeTypes() {
    return serviceChargeTypes;
  }
  public void setServiceChargeTypes(List<String> serviceChargeTypes) {
    this.serviceChargeTypes = serviceChargeTypes;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SupportContact supportContact = (SupportContact) o;
    return Objects.equals(email, supportContact.email) &&
        Objects.equals(phone, supportContact.phone) &&
        Objects.equals(phoneChargeDescription, supportContact.phoneChargeDescription) &&
        Objects.equals(language, supportContact.language) &&
        Objects.equals(serviceChargeTypes, supportContact.serviceChargeTypes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, phone, phoneChargeDescription, language, serviceChargeTypes);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SupportContact {\n");
    
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    phoneChargeDescription: ").append(toIndentedString(phoneChargeDescription)).append("\n");
    sb.append("    language: ").append(toIndentedString(language)).append("\n");
    sb.append("    serviceChargeTypes: ").append(toIndentedString(serviceChargeTypes)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
